<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="https://gmpg.org/xfn/11">
<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<?php
$logo       = blrt_option( 'logo' );
$logo_dark  = blrt_option( 'logo_dark' );
$co_name    = blrt_option( 'company_name' ) ?: get_bloginfo( 'name' );
$sectors    = blrt_option( 'sectors' ) ?: [];
?>

<header class="site-header" role="banner">
  <div class="container-pro header-inner">

    <!-- Logo -->
    <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="site-logo" aria-label="<?php echo esc_attr( $co_name ); ?> — Home">
      <?php if ( $logo ) : ?>
        <img src="<?php echo esc_url( $logo['url'] ); ?>" alt="<?php echo esc_attr( $co_name ); ?>" width="<?php echo esc_attr( $logo['width'] ); ?>" height="<?php echo esc_attr( $logo['height'] ); ?>">
      <?php else : ?>
        <span style="font-size:1.125rem;font-weight:800;color:#fff;letter-spacing:-.03em;"><?php echo esc_html( $co_name ); ?></span>
      <?php endif; ?>
    </a>

    <!-- Mobile toggle -->
    <button class="menu-toggle" aria-controls="primary-nav" aria-expanded="false" aria-label="Open menu">
      <?php echo blrt_icon( 'menu', 'icon' ); ?>
    </button>

    <!-- Primary navigation -->
    <nav id="primary-nav" class="main-nav" role="navigation" aria-label="Primary">

      <!-- Companies megamenu (only if sectors defined) -->
      <?php if ( ! empty( $sectors ) ) : ?>
      <div class="nav-item" style="position:relative;">
        <button class="nav-link mega-trigger" aria-expanded="false" aria-haspopup="true">
          <?php esc_html_e( 'Companies', 'blrt' ); ?>
          <?php echo blrt_icon( 'chevron-down', 'icon chevron' ); ?>
        </button>
        <div class="megamenu" role="region" aria-label="Companies navigation">
          <?php foreach ( $sectors as $sector ) :
            $companies = $sector['companies'] ?? [];
            if ( empty( $companies ) ) continue;
          ?>
          <div class="mega-sector">
            <div class="mega-sector-label"><?php echo esc_html( $sector['sector_label'] ); ?></div>
            <ul class="mega-company-list">
              <?php foreach ( $companies as $co ) : ?>
              <li>
                <a href="<?php echo esc_url( $co['url'] ); ?>" class="mega-company-link">
                  <span><?php echo esc_html( $co['name'] ); ?></span>
                  <?php if ( ! empty( $co['countries'] ) ) : ?>
                  <span class="mega-co-countries"><?php echo esc_html( $co['countries'] ); ?></span>
                  <?php endif; ?>
                </a>
              </li>
              <?php endforeach; ?>
            </ul>
          </div>
          <?php endforeach; ?>
        </div>
      </div>
      <?php endif; ?>

      <!-- Standard menu items from WP nav menus -->
      <?php
      wp_nav_menu( [
        'theme_location'  => 'primary',
        'container'       => false,
        'menu_class'      => '',
        'fallback_cb'     => false,
        'items_wrap'      => '%3$s',
        'walker'          => new BLRT_Nav_Walker(),
      ] );
      ?>
    </nav>

    <!-- Actions: lang switcher + CTA -->
    <div class="header-actions">
      <?php echo blrt_language_switcher(); ?>
      <a href="<?php echo esc_url( get_page_link( get_page_by_path( 'contacts' ) ) ?: home_url( '/contacts' ) ); ?>" class="btn btn-primary" style="padding:.5rem 1.125rem;font-size:.8125rem;">
        <?php esc_html_e( 'Contact Us', 'blrt' ); ?>
      </a>
    </div>

  </div><!-- .header-inner -->
</header>

<?php
// Simple nav walker — adds .nav-link class to every <a>
if ( ! class_exists( 'BLRT_Nav_Walker' ) ) :
class BLRT_Nav_Walker extends Walker_Nav_Menu {
  public function start_el( &$output, $item, $depth = 0, $args = null, $id = 0 ) {
    $classes  = implode( ' ', $item->classes );
    $is_cur   = in_array( 'current-menu-item', $item->classes );
    $link_cls = 'nav-link' . ( $is_cur ? ' active' : '' );
    $output  .= sprintf(
      '<a href="%s" class="%s"%s>%s</a>',
      esc_url( $item->url ),
      esc_attr( $link_cls ),
      $is_cur ? ' aria-current="page"' : '',
      esc_html( $item->title )
    );
  }
}
endif;
?>

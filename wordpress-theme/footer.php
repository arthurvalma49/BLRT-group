<?php
$co_name   = blrt_option( 'company_name' ) ?: get_bloginfo( 'name' );
$logo_w    = blrt_option( 'logo' );
$tagline   = blrt_option( 'footer_tagline' );
$email     = blrt_option( 'footer_email' );
$phone     = blrt_option( 'footer_phone' );
$address   = blrt_option( 'footer_address' );
$reg_code  = blrt_option( 'reg_code' );
$socials   = blrt_option( 'social_links' ) ?: [];
$year      = date( 'Y' );

$social_icons = [
  'linkedin'  => '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
  'facebook'  => '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
  'youtube'   => '<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>',
  'instagram' => '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>',
];
?>

<!-- Lightbox (shared across pages) -->
<div id="lightbox" class="lightbox-overlay" role="dialog" aria-modal="true" aria-label="Image viewer">
  <button class="lightbox-close" aria-label="Close">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
  </button>
  <img class="lightbox-img" src="" alt="">
</div>

<footer class="site-footer" role="contentinfo">
  <div class="container-pro">
    <div class="footer-grid">

      <!-- Brand column -->
      <div class="footer-brand">
        <?php if ( $logo_w ) : ?>
          <img src="<?php echo esc_url( $logo_w['url'] ); ?>" alt="<?php echo esc_attr( $co_name ); ?>" class="footer-logo">
        <?php else : ?>
          <span class="footer-logo" style="font-size:1.125rem;font-weight:800;color:#fff;display:block;margin-bottom:1rem;"><?php echo esc_html( $co_name ); ?></span>
        <?php endif; ?>
        <?php if ( $tagline ) : ?>
          <p><?php echo esc_html( $tagline ); ?></p>
        <?php endif; ?>
      </div>

      <!-- Navigation column -->
      <div class="footer-col">
        <h4><?php esc_html_e( 'Navigation', 'blrt' ); ?></h4>
        <?php
        wp_nav_menu( [
          'theme_location' => 'footer',
          'container'      => false,
          'fallback_cb'    => false,
          'items_wrap'     => '%3$s',
          'walker'         => new BLRT_Footer_Nav_Walker(),
        ] );
        ?>
      </div>

      <!-- Contact column -->
      <div class="footer-col">
        <h4><?php esc_html_e( 'Contact', 'blrt' ); ?></h4>
        <?php if ( $address ) : ?>
          <span><?php echo esc_html( $address ); ?></span>
        <?php endif; ?>
        <?php if ( $phone ) : ?>
          <a href="tel:<?php echo esc_attr( preg_replace( '/\s+/', '', $phone ) ); ?>"><?php echo esc_html( $phone ); ?></a>
        <?php endif; ?>
        <?php if ( $email ) : ?>
          <a href="mailto:<?php echo esc_attr( $email ); ?>"><?php echo esc_html( $email ); ?></a>
        <?php endif; ?>
        <?php if ( $reg_code ) : ?>
          <span><?php printf( esc_html__( 'Reg. %s', 'blrt' ), esc_html( $reg_code ) ); ?></span>
        <?php endif; ?>
      </div>

      <!-- Legal column -->
      <div class="footer-col">
        <h4><?php esc_html_e( 'Legal', 'blrt' ); ?></h4>
        <a href="<?php echo esc_url( home_url( '/privacy-policy' ) ); ?>"><?php esc_html_e( 'Privacy Policy', 'blrt' ); ?></a>
        <a href="<?php echo esc_url( home_url( '/cookie-policy' ) ); ?>"><?php esc_html_e( 'Cookie Policy', 'blrt' ); ?></a>
        <a href="<?php echo esc_url( home_url( '/terms' ) ); ?>"><?php esc_html_e( 'Terms of Use', 'blrt' ); ?></a>
      </div>

    </div><!-- .footer-grid -->

    <div class="footer-bottom">
      <span>&copy; <?php echo esc_html( $year ); ?> <?php echo esc_html( $co_name ); ?>. <?php esc_html_e( 'All rights reserved.', 'blrt' ); ?></span>

      <?php if ( ! empty( $socials ) ) : ?>
      <div class="footer-social">
        <?php foreach ( $socials as $s ) :
          $platform = $s['platform'] ?? '';
          $url      = $s['url'] ?? '';
          $path     = $social_icons[ $platform ] ?? '';
          if ( ! $url || ! $path ) continue;
        ?>
        <a href="<?php echo esc_url( $url ); ?>" target="_blank" rel="noopener noreferrer" aria-label="<?php echo esc_attr( ucfirst( $platform ) ); ?>">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><?php echo $path; ?></svg>
        </a>
        <?php endforeach; ?>
      </div>
      <?php endif; ?>
    </div>

  </div><!-- .container-pro -->
</footer>

<?php wp_footer(); ?>
</body>
</html>

<?php
if ( ! class_exists( 'BLRT_Footer_Nav_Walker' ) ) :
class BLRT_Footer_Nav_Walker extends Walker_Nav_Menu {
  public function start_el( &$output, $item, $depth = 0, $args = null, $id = 0 ) {
    $output .= sprintf( '<a href="%s">%s</a>', esc_url( $item->url ), esc_html( $item->title ) );
  }
}
endif;
?>

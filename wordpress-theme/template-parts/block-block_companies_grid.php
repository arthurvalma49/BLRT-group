<?php
$b     = $args['block'] ?? [];
$label = $b['label'] ?? '';
$title = $b['title'] ?? '';

// Pull sectors from Theme Options (set via ACF options page)
$sectors = blrt_option( 'sectors' ) ?: [];
?>
<section class="block-companies-grid bg-light reveal">
  <div class="container-pro">
    <?php if ( $label || $title ) : ?>
    <div class="section-header">
      <div class="section-header-left">
        <?php if ( $label ) : ?><p class="overline"><?php echo esc_html( $label ); ?></p><?php endif; ?>
        <?php if ( $title ) : ?><h2 class="heading-underline"><?php echo esc_html( $title ); ?></h2><?php endif; ?>
      </div>
    </div>
    <?php endif; ?>

    <?php if ( ! empty( $sectors ) ) : ?>
    <!-- Sector quick-jump -->
    <nav class="cg-quickjump" aria-label="<?php esc_attr_e( 'Jump to sector', 'blrt' ); ?>">
      <?php foreach ( $sectors as $sector ) :
        $sid   = sanitize_html_class( $sector['sector_id'] ?? '' );
        $slabel = $sector['sector_label'] ?? '';
      ?>
        <a href="#sector-<?php echo esc_attr( $sid ); ?>" class="cg-jump-btn">
          <?php echo esc_html( $slabel ); ?>
        </a>
      <?php endforeach; ?>
    </nav>

    <div class="cg-sectors">
      <?php foreach ( $sectors as $sector ) :
        $sid       = sanitize_html_class( $sector['sector_id'] ?? '' );
        $slabel    = $sector['sector_label'] ?? '';
        $companies = $sector['companies'] ?? [];
      ?>
      <div class="cg-sector" id="sector-<?php echo esc_attr( $sid ); ?>">
        <div class="cg-sector-header">
          <span class="cg-sector-label"><?php echo esc_html( $slabel ); ?></span>
          <span class="cg-sector-count"><?php echo count( $companies ); ?></span>
          <div class="cg-sector-rule" aria-hidden="true"></div>
        </div>

        <div class="cg-grid">
          <?php foreach ( $companies as $co ) :
            $co_name      = $co['name'] ?? '';
            $co_url       = $co['url'] ?? '';
            $co_countries = $co['countries'] ?? '';
            $co_tagline   = $co['tagline'] ?? '';
          ?>
          <a href="<?php echo esc_url( $co_url ); ?>" class="cg-card">
            <div class="cg-card-body">
              <div class="cg-card-header">
                <span class="cg-co-name"><?php echo esc_html( $co_name ); ?></span>
                <?php echo blrt_icon( 'external-link', 'icon cg-arrow' ); ?>
              </div>
              <?php if ( $co_tagline ) : ?>
                <span class="cg-co-tagline"><?php echo esc_html( $co_tagline ); ?></span>
              <?php endif; ?>
              <?php if ( $co_countries ) : ?>
                <span class="cg-co-countries"><?php echo esc_html( $co_countries ); ?></span>
              <?php endif; ?>
            </div>
          </a>
          <?php endforeach; ?>
        </div>
      </div>
      <?php endforeach; ?>
    </div>
    <?php else : ?>
      <p class="cg-empty"><?php esc_html_e( 'No sectors configured. Add sectors in Theme Settings → Company Navigation.', 'blrt' ); ?></p>
    <?php endif; ?>
  </div>
</section>

<?php
$b        = $args['block'] ?? [];
$title    = $b['title'] ?? __( 'Get in Touch', 'blrt' );
$address  = $b['address'] ?? '';
$email    = $b['email'] ?? '';
$phone    = $b['phone'] ?? '';
$lat      = $b['map_lat'] ?? '59.4489';
$lng      = $b['map_lng'] ?? '24.7259';
$show_map = ! empty( $b['show_map'] );
$to_email = $b['to_email'] ?? get_option( 'admin_email' );

// Bounding box around point ±0.02 deg
$bbox = ( floatval( $lng ) - .02 ) . ',' . ( floatval( $lat ) - .012 ) . ',' . ( floatval( $lng ) + .02 ) . ',' . ( floatval( $lat ) + .012 );
$map_src = "https://www.openstreetmap.org/export/embed.html?bbox={$bbox}&layer=mapnik&marker={$lat}%2C{$lng}";
?>
<section class="block-contact-form bg-surface reveal">
  <div class="container-pro">
    <div class="contact-grid">

      <!-- Form -->
      <div>
        <p class="overline"><?php esc_html_e( 'Send us a message', 'blrt' ); ?></p>
        <h2 style="margin:.75rem 0 2rem;"><?php echo esc_html( $title ); ?></h2>
        <form class="blrt-contact-form" novalidate data-to-email="<?php echo esc_attr( $to_email ); ?>">
          <div class="form-row">
            <div class="form-group">
              <label for="cf_firstName"><?php esc_html_e( 'First name', 'blrt' ); ?> *</label>
              <input type="text" id="cf_firstName" name="firstName" required>
            </div>
            <div class="form-group">
              <label for="cf_lastName"><?php esc_html_e( 'Last name', 'blrt' ); ?> *</label>
              <input type="text" id="cf_lastName" name="lastName" required>
            </div>
          </div>
          <div class="form-group">
            <label for="cf_company"><?php esc_html_e( 'Company', 'blrt' ); ?></label>
            <input type="text" id="cf_company" name="company">
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="cf_email"><?php esc_html_e( 'Email', 'blrt' ); ?> *</label>
              <input type="email" id="cf_email" name="email" required>
            </div>
            <div class="form-group">
              <label for="cf_phone"><?php esc_html_e( 'Phone', 'blrt' ); ?></label>
              <input type="tel" id="cf_phone" name="phone">
            </div>
          </div>
          <div class="form-group">
            <label for="cf_details"><?php esc_html_e( 'Message', 'blrt' ); ?></label>
            <textarea id="cf_details" name="details" rows="5" placeholder="<?php esc_attr_e( 'Tell us about your project or enquiry…', 'blrt' ); ?>"></textarea>
          </div>
          <p class="form-feedback" style="color:var(--color-brand-red);font-size:.875rem;min-height:1.2em;" aria-live="polite"></p>
          <button type="submit" class="btn btn-primary" data-label="<?php esc_attr_e( 'Send', 'blrt' ); ?>" data-sending="<?php esc_attr_e( 'Sending…', 'blrt' ); ?>">
            <?php esc_html_e( 'Send', 'blrt' ); ?>
            <?php echo blrt_icon( 'arrow-right', 'icon' ); ?>
          </button>
        </form>
      </div>

      <!-- Info + map -->
      <div>
        <p class="overline"><?php esc_html_e( 'Location', 'blrt' ); ?></p>
        <h2 style="margin:.75rem 0 2rem;"><?php esc_html_e( 'Find us', 'blrt' ); ?></h2>
        <?php if ( $address || $phone || $email ) : ?>
        <div style="display:flex;flex-direction:column;gap:1rem;margin-bottom:2rem;">
          <?php if ( $address ) : ?>
          <div style="display:flex;align-items:flex-start;gap:.75rem;">
            <div style="width:2.25rem;height:2.25rem;border-radius:.5rem;background:hsl(4 68% 36%/.08);display:flex;align-items:center;justify-content:center;flex-shrink:0;color:var(--color-brand-red);"><?php echo blrt_icon( 'map-pin', 'icon' ); ?></div>
            <span style="font-size:.9rem;color:var(--color-muted);padding-top:.35rem;"><?php echo esc_html( $address ); ?></span>
          </div>
          <?php endif; ?>
          <?php if ( $phone ) : ?>
          <a href="tel:<?php echo esc_attr( preg_replace( '/\s+/', '', $phone ) ); ?>" style="display:flex;align-items:center;gap:.75rem;font-size:.9rem;color:var(--color-muted);">
            <div style="width:2.25rem;height:2.25rem;border-radius:.5rem;background:hsl(4 68% 36%/.08);display:flex;align-items:center;justify-content:center;flex-shrink:0;color:var(--color-brand-red);"><?php echo blrt_icon( 'phone', 'icon' ); ?></div>
            <?php echo esc_html( $phone ); ?>
          </a>
          <?php endif; ?>
          <?php if ( $email ) : ?>
          <a href="mailto:<?php echo esc_attr( $email ); ?>" style="display:flex;align-items:center;gap:.75rem;font-size:.9rem;color:var(--color-muted);">
            <div style="width:2.25rem;height:2.25rem;border-radius:.5rem;background:hsl(4 68% 36%/.08);display:flex;align-items:center;justify-content:center;flex-shrink:0;color:var(--color-brand-red);"><?php echo blrt_icon( 'mail', 'icon' ); ?></div>
            <?php echo esc_html( $email ); ?>
          </a>
          <?php endif; ?>
        </div>
        <?php endif; ?>
        <?php if ( $show_map ) : ?>
        <div class="contact-map" style="height:320px;">
          <iframe src="<?php echo esc_url( $map_src ); ?>" width="100%" height="100%" loading="lazy" title="<?php echo esc_attr( $address ?: 'Location map' ); ?>"></iframe>
        </div>
        <?php endif; ?>
      </div>

    </div>
  </div>
</section>

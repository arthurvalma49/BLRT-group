<?php
$b     = $args['block'] ?? [];
$label = $b['label'] ?? '';
$title = $b['title'] ?? '';
$image = $b['image'] ?? null;
$desc  = $b['description'] ?? '';
?>
<section class="block-presence-map bg-light reveal">
  <div class="container-pro">
    <?php if ( $label || $title ) : ?>
    <div class="section-header">
      <div class="section-header-left">
        <?php if ( $label ) : ?><p class="overline"><?php echo esc_html( $label ); ?></p><?php endif; ?>
        <?php if ( $title ) : ?><h2 class="heading-underline"><?php echo esc_html( $title ); ?></h2><?php endif; ?>
      </div>
    </div>
    <?php endif; ?>

    <div class="presence-map-wrap">
      <?php if ( $image ) : ?>
        <img
          src="<?php echo esc_url( $image['url'] ); ?>"
          alt="<?php echo esc_attr( $image['alt'] ?? __( 'Operating locations map', 'blrt' ) ); ?>"
          class="presence-map-img"
          loading="lazy"
          width="<?php echo esc_attr( $image['width'] ?? '' ); ?>"
          height="<?php echo esc_attr( $image['height'] ?? '' ); ?>"
        >
      <?php else : ?>
        <div class="presence-map-placeholder">
          <?php echo blrt_icon( 'globe', 'icon' ); ?>
          <span><?php esc_html_e( 'Map image not set', 'blrt' ); ?></span>
        </div>
      <?php endif; ?>
    </div>

    <?php if ( $desc ) : ?>
      <p class="presence-map-desc"><?php echo esc_html( $desc ); ?></p>
    <?php endif; ?>
  </div>
</section>

<?php
$b          = $args['block'] ?? [];
$image      = $b['image'] ?? null;
$img_side   = $b['image_side'] ?? 'right'; // left | right
$label      = $b['label'] ?? '';
$title      = $b['title'] ?? '';
$desc       = $b['description'] ?? '';
$btn_label  = $b['btn_label'] ?? '';
$btn_url    = $b['btn_url'] ?? '';
$btn2_label = $b['btn2_label'] ?? '';
$btn2_url   = $b['btn2_url'] ?? '';
$bg         = $b['background'] ?? 'light';
$bg_class   = match( $bg ) { 'dark' => 'bg-dark', 'surface' => 'bg-surface', default => 'bg-light' };
$reverse    = $img_side === 'left' ? ' split-reverse' : '';
?>
<section class="block-split-banner <?php echo esc_attr( $bg_class . $reverse ); ?> reveal">
  <div class="container-pro">
    <div class="split-grid">
      <!-- Text side -->
      <div class="split-text">
        <?php if ( $label ) : ?><p class="overline overline-red"><?php echo esc_html( $label ); ?></p><?php endif; ?>
        <?php if ( $title ) : ?><h2 class="heading-underline"><?php echo esc_html( $title ); ?></h2><?php endif; ?>
        <?php if ( $desc )  : ?><p class="split-desc"><?php echo esc_html( $desc ); ?></p><?php endif; ?>
        <?php if ( $btn_label || $btn2_label ) : ?>
        <div class="split-actions">
          <?php if ( $btn_label && $btn_url ) : ?>
            <a href="<?php echo esc_url( $btn_url ); ?>" class="btn btn-primary">
              <?php echo esc_html( $btn_label ); ?>
              <?php echo blrt_icon( 'arrow-right', 'icon' ); ?>
            </a>
          <?php endif; ?>
          <?php if ( $btn2_label && $btn2_url ) : ?>
            <a href="<?php echo esc_url( $btn2_url ); ?>" class="btn btn-outline">
              <?php echo esc_html( $btn2_label ); ?>
            </a>
          <?php endif; ?>
        </div>
        <?php endif; ?>
      </div>

      <!-- Image side -->
      <div class="split-image">
        <?php if ( $image ) : ?>
          <img
            src="<?php echo esc_url( $image['sizes']['large'] ?? $image['url'] ); ?>"
            alt="<?php echo esc_attr( $image['alt'] ?? $title ); ?>"
            loading="lazy"
          >
        <?php else : ?>
          <div class="split-image-placeholder" aria-hidden="true">
            <?php echo blrt_icon( 'eye', 'icon' ); ?>
          </div>
        <?php endif; ?>
      </div>
    </div>
  </div>
</section>

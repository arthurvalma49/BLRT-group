<?php
$b       = $args['block'] ?? [];
$label   = $b['label'] ?? '';
$title   = $b['title'] ?? '';
$images  = $b['images'] ?? [];
$cols    = intval( $b['columns'] ?? 3 );
if ( empty( $images ) ) return;
?>
<section class="block-gallery bg-light reveal">
  <div class="container-pro">
    <div class="section-header">
      <div class="section-header-left">
        <?php if ( $label ) : ?><p class="overline"><?php echo esc_html( $label ); ?></p><?php endif; ?>
        <?php if ( $title ) : ?><h2 class="heading-underline"><?php echo esc_html( $title ); ?></h2><?php endif; ?>
      </div>
    </div>
    <div class="gallery-grid cols-<?php echo esc_attr( $cols ); ?>">
      <?php foreach ( $images as $img ) :
        $full  = $img['url'] ?? '';
        $thumb = $img['sizes']['large'] ?? $full;
        $alt   = $img['alt'] ?? '';
      ?>
      <div class="gallery-item">
        <img src="<?php echo esc_url( $thumb ); ?>" alt="<?php echo esc_attr( $alt ); ?>" loading="lazy" data-full="<?php echo esc_url( $full ); ?>">
      </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

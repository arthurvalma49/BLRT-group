<?php
$b        = $args['block'] ?? [];
$label    = $b['label'] ?? '';
$title    = $b['title'] ?? '';
$products = $b['products'] ?? [];
?>
<section class="block-products bg-light reveal">
  <div class="container-pro">
    <div class="section-header">
      <div class="section-header-left">
        <?php if ( $label ) : ?><p class="overline"><?php echo esc_html( $label ); ?></p><?php endif; ?>
        <?php if ( $title ) : ?><h2 class="heading-underline"><?php echo esc_html( $title ); ?></h2><?php endif; ?>
      </div>
    </div>
    <div class="products-grid">
      <?php foreach ( $products as $prod ) :
        $image = $prod['image'] ?? null;
        $name  = $prod['name'] ?? '';
        $desc  = $prod['desc'] ?? '';
        $specs = $prod['specs'] ?? '';
        $tag   = $prod['tag'] ?? '';
      ?>
      <div class="product-card">
        <?php if ( $image ) : ?>
        <div class="product-image">
          <img src="<?php echo esc_url( $image['url'] ); ?>" alt="<?php echo esc_attr( $image['alt'] ?? $name ); ?>" loading="lazy">
        </div>
        <?php endif; ?>
        <div class="product-card-body">
          <?php if ( $tag ) : ?><p class="product-card-tag"><?php echo esc_html( $tag ); ?></p><?php endif; ?>
          <h3><?php echo esc_html( $name ); ?></h3>
          <?php if ( $desc ) : ?><p><?php echo esc_html( $desc ); ?></p><?php endif; ?>
          <?php if ( $specs ) : ?><div class="product-specs"><?php echo esc_html( $specs ); ?></div><?php endif; ?>
        </div>
      </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

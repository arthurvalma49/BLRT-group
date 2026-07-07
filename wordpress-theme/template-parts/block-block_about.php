<?php
$b      = $args['block'] ?? [];
$bg     = $b['background'] ?? 'light';
$label  = $b['label'] ?? '';
$title  = $b['title'] ?? '';
$p1     = $b['paragraph_1'] ?? '';
$p2     = $b['paragraph_2'] ?? '';
$image  = $b['image'] ?? null;
$ll     = $b['link_label'] ?? '';
$lu     = $b['link_url'] ?? '';

$bg_class = match($bg) { 'dark' => 'bg-dark', 'surface' => 'bg-surface', default => 'bg-light' };
?>
<section class="block-about <?php echo esc_attr( $bg_class ); ?> reveal">
  <div class="container-pro">
    <div class="about-grid">
      <div class="about-text">
        <?php if ( $label ) : ?><p class="overline"><?php echo esc_html( $label ); ?></p><?php endif; ?>
        <?php if ( $title ) : ?><h2 class="heading-underline" style="margin:.75rem 0 1.5rem;"><?php echo esc_html( $title ); ?></h2><?php endif; ?>
        <?php if ( $p1 ) : ?><p><?php echo esc_html( $p1 ); ?></p><?php endif; ?>
        <?php if ( $p2 ) : ?><p><?php echo esc_html( $p2 ); ?></p><?php endif; ?>
        <?php if ( $ll && $lu ) : ?>
          <a href="<?php echo esc_url( $lu ); ?>" class="btn btn-outline" style="margin-top:2rem;">
            <?php echo esc_html( $ll ); ?>
            <?php echo blrt_icon( 'arrow-right', 'icon' ); ?>
          </a>
        <?php endif; ?>
      </div>
      <?php if ( $image ) : ?>
      <div class="about-image">
        <img src="<?php echo esc_url( $image['url'] ); ?>" alt="<?php echo esc_attr( $image['alt'] ); ?>" loading="lazy">
      </div>
      <?php endif; ?>
    </div>
  </div>
</section>

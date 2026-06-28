<?php
$b     = $args['block'] ?? [];
$image = $b['image'] ?? null;
$badge = $b['badge'] ?? '';
$title = $b['title'] ?? '';
$title2= $b['title2'] ?? '';
$desc  = $b['description'] ?? '';
$btn1l = $b['btn_label'] ?? '';
$btn1u = $b['btn_url'] ?? '';
$btn2l = $b['btn2_label'] ?? '';
$btn2u = $b['btn2_url'] ?? '';
?>
<section class="block-hero reveal">
  <?php if ( $image ) : ?>
    <img src="<?php echo esc_url( $image['url'] ); ?>" alt="" class="hero-bg" aria-hidden="true" fetchpriority="high">
  <?php endif; ?>
  <div class="hero-overlay"></div>

  <div class="container-pro hero-content">
    <?php if ( $badge ) : ?>
      <div class="hero-badge"><?php echo esc_html( $badge ); ?></div>
    <?php endif; ?>

    <h1>
      <?php echo esc_html( $title ); ?>
      <?php if ( $title2 ) : ?><br><span><?php echo esc_html( $title2 ); ?></span><?php endif; ?>
    </h1>

    <?php if ( $desc ) : ?>
      <p class="hero-desc"><?php echo esc_html( $desc ); ?></p>
    <?php endif; ?>

    <?php if ( $btn1l || $btn2l ) : ?>
    <div class="hero-actions">
      <?php if ( $btn1l && $btn1u ) : ?>
        <a href="<?php echo esc_url( $btn1u ); ?>" class="btn btn-primary">
          <?php echo esc_html( $btn1l ); ?>
          <?php echo blrt_icon( 'arrow-right', 'icon' ); ?>
        </a>
      <?php endif; ?>
      <?php if ( $btn2l && $btn2u ) : ?>
        <a href="<?php echo esc_url( $btn2u ); ?>" class="btn btn-ghost">
          <?php echo esc_html( $btn2l ); ?>
        </a>
      <?php endif; ?>
    </div>
    <?php endif; ?>
  </div>
</section>

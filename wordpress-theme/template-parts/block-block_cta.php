<?php
$b      = $args['block'] ?? [];
$bg     = $b['background'] ?? 'dark';
$label  = $b['label'] ?? '';
$title  = $b['title'] ?? '';
$desc   = $b['description'] ?? '';
$btnl   = $b['btn_label'] ?? '';
$btnu   = $b['btn_url'] ?? '';
$bg_class = ( $bg === 'red' ) ? '' : 'bg-dark';
$bg_style = ( $bg === 'red' ) ? 'style="background:var(--color-brand-red);"' : '';
?>
<section class="block-cta <?php echo esc_attr( $bg_class ); ?> reveal" <?php echo $bg_style; ?>>
  <div class="container-pro">
    <div class="cta-inner">
      <div class="cta-text">
        <?php if ( $label ) : ?><p class="overline" style="color:rgba(255,255,255,.45)"><?php echo esc_html( $label ); ?></p><?php endif; ?>
        <?php if ( $title ) : ?><h2><?php echo esc_html( $title ); ?></h2><?php endif; ?>
        <?php if ( $desc ) : ?><p><?php echo esc_html( $desc ); ?></p><?php endif; ?>
      </div>
      <?php if ( $btnl && $btnu ) : ?>
        <a href="<?php echo esc_url( $btnu ); ?>" class="btn btn-primary" style="flex-shrink:0;white-space:nowrap;">
          <?php echo esc_html( $btnl ); ?>
          <?php echo blrt_icon( 'arrow-right', 'icon' ); ?>
        </a>
      <?php endif; ?>
    </div>
  </div>
</section>

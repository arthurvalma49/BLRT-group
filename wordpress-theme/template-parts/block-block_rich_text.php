<?php
$b         = $args['block'] ?? [];
$bg        = $b['background'] ?? 'light';
$content   = $b['content'] ?? '';
$side_img  = $b['side_image'] ?? null;
$layout    = $b['layout'] ?? 'full'; // full | side-image
$align     = $b['text_align'] ?? 'left'; // left | center
$bg_class  = match( $bg ) { 'dark' => 'bg-dark', 'surface' => 'bg-surface', default => 'bg-light' };
$has_image = $side_img && $layout === 'side-image';
if ( ! $content ) return;
?>
<section class="block-rich-text <?php echo esc_attr( $bg_class ); ?> text-<?php echo esc_attr( $align ); ?> reveal">
  <div class="container-pro">
    <?php if ( $has_image ) : ?>
    <div class="rich-text-with-image">
      <div class="entry-content">
        <?php echo wp_kses_post( $content ); ?>
      </div>
      <div class="rich-text-side-image">
        <img
          src="<?php echo esc_url( $side_img['sizes']['large'] ?? $side_img['url'] ); ?>"
          alt="<?php echo esc_attr( $side_img['alt'] ?? '' ); ?>"
          loading="lazy"
        >
      </div>
    </div>
    <?php else : ?>
    <div class="entry-content<?php echo $align === 'center' ? ' mx-auto' : ''; ?>">
      <?php echo wp_kses_post( $content ); ?>
    </div>
    <?php endif; ?>
  </div>
</section>

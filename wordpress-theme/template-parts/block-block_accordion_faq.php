<?php
$b     = $args['block'] ?? [];
$label = $b['label'] ?? '';
$title = $b['title'] ?? '';
$bg    = $b['background'] ?? 'light';
$items = $b['items'] ?? [];
$bg_class = match( $bg ) { 'dark' => 'bg-dark', 'surface' => 'bg-surface', default => 'bg-light' };
if ( empty( $items ) ) return;
?>
<section class="block-accordion-faq <?php echo esc_attr( $bg_class ); ?> reveal">
  <div class="container-pro">
    <?php if ( $label || $title ) : ?>
    <div class="section-header">
      <div class="section-header-left">
        <?php if ( $label ) : ?><p class="overline"><?php echo esc_html( $label ); ?></p><?php endif; ?>
        <?php if ( $title ) : ?><h2 class="heading-underline"><?php echo esc_html( $title ); ?></h2><?php endif; ?>
      </div>
    </div>
    <?php endif; ?>

    <div class="faq-list">
      <?php foreach ( $items as $i => $item ) :
        $question = $item['question'] ?? '';
        $answer   = $item['answer'] ?? '';
        $id       = 'faq-' . $i;
      ?>
      <div class="faq-item">
        <button
          class="faq-toggle"
          aria-expanded="false"
          aria-controls="<?php echo esc_attr( $id ); ?>"
        >
          <span class="faq-question"><?php echo esc_html( $question ); ?></span>
          <span class="faq-chevron" aria-hidden="true"><?php echo blrt_icon( 'chevron-down', 'icon' ); ?></span>
        </button>
        <div class="faq-answer" id="<?php echo esc_attr( $id ); ?>" hidden>
          <div class="faq-answer-inner">
            <?php echo wp_kses_post( wpautop( $answer ) ); ?>
          </div>
        </div>
      </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

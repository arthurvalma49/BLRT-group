<?php
$b      = $args['block'] ?? [];
$label  = $b['label'] ?? '';
$title  = $b['title'] ?? '';
$bg     = $b['background'] ?? 'light';
$events = $b['events'] ?? [];
$bg_class = match( $bg ) { 'dark' => 'bg-dark', 'surface' => 'bg-surface', default => 'bg-light' };
if ( empty( $events ) ) return;
?>
<section class="block-timeline <?php echo esc_attr( $bg_class ); ?> reveal">
  <div class="container-pro">
    <?php if ( $label || $title ) : ?>
    <div class="section-header">
      <div class="section-header-left">
        <?php if ( $label ) : ?><p class="overline"><?php echo esc_html( $label ); ?></p><?php endif; ?>
        <?php if ( $title ) : ?><h2 class="heading-underline"><?php echo esc_html( $title ); ?></h2><?php endif; ?>
      </div>
    </div>
    <?php endif; ?>

    <ol class="timeline">
      <?php foreach ( $events as $ev ) :
        $year  = $ev['year'] ?? '';
        $etit  = $ev['title'] ?? '';
        $edesc = $ev['description'] ?? '';
        $eimg  = $ev['image'] ?? null;
      ?>
      <li class="timeline-item">
        <div class="timeline-marker" aria-hidden="true"></div>
        <div class="timeline-content">
          <?php if ( $year ) : ?>
            <span class="timeline-year"><?php echo esc_html( $year ); ?></span>
          <?php endif; ?>
          <?php if ( $etit ) : ?><h3><?php echo esc_html( $etit ); ?></h3><?php endif; ?>
          <?php if ( $edesc ) : ?><p><?php echo esc_html( $edesc ); ?></p><?php endif; ?>
          <?php if ( $eimg ) : ?>
            <div class="timeline-image">
              <img
                src="<?php echo esc_url( $eimg['sizes']['large'] ?? $eimg['url'] ); ?>"
                alt="<?php echo esc_attr( $eimg['alt'] ?? $etit ); ?>"
                loading="lazy"
              >
            </div>
          <?php endif; ?>
        </div>
      </li>
      <?php endforeach; ?>
    </ol>
  </div>
</section>

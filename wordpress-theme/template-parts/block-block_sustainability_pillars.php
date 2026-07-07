<?php
$b       = $args['block'] ?? [];
$label   = $b['label'] ?? '';
$title   = $b['title'] ?? '';
$bg      = $b['background'] ?? 'light';
$pillars = $b['pillars'] ?? [];
$bg_class = match( $bg ) { 'dark' => 'bg-dark', 'surface' => 'bg-surface', default => 'bg-light' };
?>
<section class="block-sustainability-pillars <?php echo esc_attr( $bg_class ); ?> reveal">
  <div class="container-pro">
    <?php if ( $label || $title ) : ?>
    <div class="section-header">
      <div class="section-header-left">
        <?php if ( $label ) : ?><p class="overline"><?php echo esc_html( $label ); ?></p><?php endif; ?>
        <?php if ( $title ) : ?><h2 class="heading-underline"><?php echo esc_html( $title ); ?></h2><?php endif; ?>
      </div>
    </div>
    <?php endif; ?>

    <div class="pillars-grid">
      <?php foreach ( $pillars as $p ) :
        $icon      = $p['icon'] ?? 'shield';
        $overline  = $p['overline'] ?? '';
        $stat      = $p['stat'] ?? '';
        $stat_label = $p['stat_label'] ?? '';
        $heading   = $p['heading'] ?? '';
        $desc      = $p['description'] ?? '';
        $color     = $p['accent_color'] ?? 'red'; // red | blue | green
        $color_class = 'pillar-accent-' . sanitize_html_class( $color );
      ?>
      <div class="pillar-card <?php echo esc_attr( $color_class ); ?>">
        <div class="pillar-header">
          <div class="pillar-icon"><?php echo blrt_icon( $icon, 'icon' ); ?></div>
          <?php if ( $overline ) : ?>
            <span class="pillar-overline"><?php echo esc_html( $overline ); ?></span>
          <?php endif; ?>
        </div>

        <?php if ( $stat ) : ?>
        <div class="pillar-stat">
          <span class="pillar-stat-value"><?php echo esc_html( $stat ); ?></span>
          <?php if ( $stat_label ) : ?>
            <span class="pillar-stat-label"><?php echo esc_html( $stat_label ); ?></span>
          <?php endif; ?>
        </div>
        <?php endif; ?>

        <div class="pillar-body">
          <?php if ( $heading ) : ?><h3><?php echo esc_html( $heading ); ?></h3><?php endif; ?>
          <?php if ( $desc ) : ?><p><?php echo esc_html( $desc ); ?></p><?php endif; ?>
        </div>
      </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

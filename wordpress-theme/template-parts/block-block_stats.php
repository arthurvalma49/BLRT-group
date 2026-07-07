<?php
$b     = $args['block'] ?? [];
$bg    = $b['background'] ?? 'dark';
$items = $b['stats'] ?? [];
$bg_class = ( $bg === 'dark' ) ? 'bg-dark' : 'bg-light';
?>
<section class="block-stats <?php echo esc_attr( $bg_class ); ?> reveal">
  <div class="container-pro">
    <div class="stats-grid">
      <?php foreach ( $items as $s ) :
        $val      = intval( $s['value'] ?? 0 );
        $suffix   = $s['suffix'] ?? '';
        $label    = $s['label'] ?? '';
        $animated = ! empty( $s['animated'] );
      ?>
      <div class="stat-card">
        <div class="stat-value"<?php if ( $animated ) echo ' data-target="' . esc_attr( $val ) . '" data-suffix="' . esc_attr( $suffix ) . '"'; ?>>
          <?php echo esc_html( $animated ? '0' : ( $val . $suffix ) ); ?>
        </div>
        <div class="stat-label"><?php echo esc_html( $label ); ?></div>
      </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

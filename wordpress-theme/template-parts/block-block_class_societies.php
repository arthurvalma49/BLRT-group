<?php
$b        = $args['block'] ?? [];
$label    = $b['label'] ?? __( 'Classification Societies Accepted', 'blrt' );
$societies = $b['societies'] ?? [];

// Fallback default list if none configured
if ( empty( $societies ) ) {
    $societies = [
        [ 'abbr' => 'LR' ],
        [ 'abbr' => 'DNV' ],
        [ 'abbr' => 'BV' ],
        [ 'abbr' => 'ABS' ],
        [ 'abbr' => 'RINA' ],
        [ 'abbr' => 'KR' ],
        [ 'abbr' => 'IR' ],
        [ 'abbr' => 'NKK' ],
        [ 'abbr' => 'WTA' ],
    ];
}

// Double items for seamless infinite marquee loop
$doubled = array_merge( $societies, $societies );
?>
<section class="block-class-societies">
  <div class="container-pro cs-overline">
    <p class="overline" style="color:rgba(255,255,255,.35)"><?php echo esc_html( $label ); ?></p>
  </div>

  <div class="cs-track-wrapper">
    <div class="cs-track">
      <?php foreach ( $doubled as $i => $s ) :
        $abbr = $s['abbr'] ?? '';
        $logo = $s['logo'] ?? null;
        $name = $s['name'] ?? $abbr;
      ?>
      <div class="cs-item" aria-hidden="<?php echo $i >= count( $societies ) ? 'true' : 'false'; ?>">
        <?php if ( $logo ) : ?>
          <img src="<?php echo esc_url( $logo['url'] ); ?>" alt="<?php echo esc_attr( $name ); ?>" class="cs-logo" loading="lazy">
        <?php else : ?>
          <span class="cs-abbr"><?php echo esc_html( $abbr ); ?></span>
        <?php endif; ?>
      </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

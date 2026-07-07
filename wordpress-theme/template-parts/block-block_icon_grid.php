<?php
$b     = $args['block'] ?? [];
$label = $b['label'] ?? '';
$title = $b['title'] ?? '';
$bg    = $b['background'] ?? 'surface';
$cols  = intval( $b['columns'] ?? 3 );
$items = $b['items'] ?? [];
$bg_class = match( $bg ) { 'dark' => 'bg-dark', 'light' => 'bg-light', default => 'bg-surface' };
if ( empty( $items ) ) return;
?>
<section class="block-icon-grid <?php echo esc_attr( $bg_class ); ?> reveal">
  <div class="container-pro">
    <?php if ( $label || $title ) : ?>
    <div class="section-header">
      <div class="section-header-left">
        <?php if ( $label ) : ?><p class="overline"><?php echo esc_html( $label ); ?></p><?php endif; ?>
        <?php if ( $title ) : ?><h2 class="heading-underline"><?php echo esc_html( $title ); ?></h2><?php endif; ?>
      </div>
    </div>
    <?php endif; ?>

    <div class="icon-grid cols-<?php echo esc_attr( $cols ); ?>">
      <?php foreach ( $items as $it ) :
        $icon  = $it['icon'] ?? 'zap';
        $itit  = $it['title'] ?? '';
        $itext = $it['text'] ?? '';
        $ilink = $it['link_url'] ?? '';
        $tag   = $ilink ? 'a' : 'div';
        $attrs = $ilink ? ' href="' . esc_url( $ilink ) . '"' : '';
      ?>
      <<?php echo $tag . $attrs; ?> class="icon-feature<?php echo $ilink ? ' icon-feature-link' : ''; ?>">
        <div class="icon-feature-icon"><?php echo blrt_icon( $icon, 'icon' ); ?></div>
        <?php if ( $itit )  : ?><h3 class="icon-feature-title"><?php echo esc_html( $itit ); ?></h3><?php endif; ?>
        <?php if ( $itext ) : ?><p class="icon-feature-text"><?php echo esc_html( $itext ); ?></p><?php endif; ?>
        <?php if ( $ilink ) : ?>
          <span class="icon-feature-arrow" aria-hidden="true"><?php echo blrt_icon( 'arrow-right', 'icon' ); ?></span>
        <?php endif; ?>
      </<?php echo $tag; ?>>
      <?php endforeach; ?>
    </div>
  </div>
</section>

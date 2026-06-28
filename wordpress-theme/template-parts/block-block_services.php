<?php
$b        = $args['block'] ?? [];
$bg       = $b['background'] ?? 'surface';
$label    = $b['label'] ?? '';
$title    = $b['title'] ?? '';
$services = $b['services'] ?? [];
$bg_class = match($bg) { 'dark' => 'bg-dark', 'light' => 'bg-light', default => 'bg-surface' };
$more_label = __( 'Read more', 'blrt' );
$less_label = __( 'Show less', 'blrt' );
?>
<section class="block-services <?php echo esc_attr( $bg_class ); ?> reveal">
  <div class="container-pro">
    <div class="section-header">
      <div class="section-header-left">
        <?php if ( $label ) : ?><p class="overline"><?php echo esc_html( $label ); ?></p><?php endif; ?>
        <?php if ( $title ) : ?><h2 class="heading-underline"><?php echo esc_html( $title ); ?></h2><?php endif; ?>
      </div>
    </div>
    <div class="services-grid">
      <?php foreach ( $services as $svc ) :
        $icon     = $svc['icon'] ?? 'file';
        $name     = $svc['title'] ?? '';
        $desc     = $svc['desc'] ?? '';
        $fullDesc = $svc['fullDesc'] ?? '';
      ?>
      <div class="service-card">
        <div class="svc-icon"><?php echo blrt_icon( $icon, 'icon' ); ?></div>
        <h3><?php echo esc_html( $name ); ?></h3>
        <p><?php echo esc_html( $desc ); ?></p>
        <?php if ( $fullDesc ) : ?>
          <div class="svc-full" hidden>
            <?php foreach ( explode( "\n\n", $fullDesc ) as $para ) : ?>
              <p><?php echo esc_html( $para ); ?></p>
            <?php endforeach; ?>
          </div>
          <button class="svc-toggle" aria-expanded="false" data-more="<?php echo esc_attr( $more_label ); ?>" data-less="<?php echo esc_attr( $less_label ); ?>">
            <span class="btn-label"><?php echo esc_html( $more_label ); ?></span>
            <?php echo blrt_icon( 'chevron-down', 'icon' ); ?>
          </button>
        <?php endif; ?>
      </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

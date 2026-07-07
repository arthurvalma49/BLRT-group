<?php
$b     = $args['block'] ?? [];
$label = $b['label'] ?? '';
$title = $b['title'] ?? '';
$certs = $b['certificates'] ?? [];
if ( empty( $certs ) ) return;
?>
<section class="block-certificates bg-surface reveal">
  <div class="container-pro">
    <div class="section-header">
      <div class="section-header-left">
        <?php if ( $label ) : ?><p class="overline"><?php echo esc_html( $label ); ?></p><?php endif; ?>
        <?php if ( $title ) : ?><h2 class="heading-underline"><?php echo esc_html( $title ); ?></h2><?php endif; ?>
      </div>
    </div>
    <div class="certificates-grid">
      <?php foreach ( $certs as $cert ) :
        $logo  = $cert['logo'] ?? null;
        $name  = $cert['name'] ?? '';
        $iss   = $cert['issuer'] ?? '';
        $num   = $cert['number'] ?? '';
        $valid = $cert['valid_until'] ?? '';
      ?>
      <div class="cert-card">
        <?php if ( $logo ) : ?>
          <img src="<?php echo esc_url( $logo['url'] ); ?>" alt="<?php echo esc_attr( $logo['alt'] ?? $iss ); ?>" class="cert-logo" loading="lazy">
        <?php endif; ?>
        <div class="cert-name"><?php echo esc_html( $name ); ?></div>
        <?php if ( $iss ) : ?><div class="cert-issuer"><?php echo esc_html( $iss ); ?></div><?php endif; ?>
        <?php if ( $num || $valid ) : ?>
        <div class="cert-meta">
          <?php if ( $num ) : ?><span><?php printf( esc_html__( 'No. %s', 'blrt' ), '<span class="cert-number">' . esc_html( $num ) . '</span>' ); ?></span><?php endif; ?>
          <?php if ( $valid ) : ?><span><?php printf( esc_html__( 'Valid until %s', 'blrt' ), esc_html( $valid ) ); ?></span><?php endif; ?>
        </div>
        <?php endif; ?>
      </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

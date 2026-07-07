<?php
$b     = $args['block'] ?? [];
$label = $b['label'] ?? '';
$title = $b['title'] ?? '';
$bg    = $b['background'] ?? 'light';
$items = $b['items'] ?? [];
$bg_class = match( $bg ) { 'dark' => 'bg-dark', 'surface' => 'bg-surface', default => 'bg-light' };
if ( empty( $items ) ) return;
?>
<section class="block-downloads <?php echo esc_attr( $bg_class ); ?> reveal">
  <div class="container-pro">
    <?php if ( $label || $title ) : ?>
    <div class="section-header">
      <div class="section-header-left">
        <?php if ( $label ) : ?><p class="overline"><?php echo esc_html( $label ); ?></p><?php endif; ?>
        <?php if ( $title ) : ?><h2 class="heading-underline"><?php echo esc_html( $title ); ?></h2><?php endif; ?>
      </div>
    </div>
    <?php endif; ?>

    <ul class="downloads-list">
      <?php foreach ( $items as $dl ) :
        $dtitle = $dl['title'] ?? '';
        $ddesc  = $dl['description'] ?? '';
        $file   = $dl['file'] ?? null;
        $dtype  = $dl['type_label'] ?? 'PDF';
        $dsize  = $dl['file_size'] ?? ( $file ? size_format( $file['filesize'] ?? 0 ) : '' );
        $durl   = $file['url'] ?? '';
      ?>
      <li class="download-item">
        <div class="download-icon" aria-hidden="true"><?php echo blrt_icon( 'file', 'icon' ); ?></div>
        <div class="download-info">
          <?php if ( $dtitle ) : ?><div class="download-title"><?php echo esc_html( $dtitle ); ?></div><?php endif; ?>
          <?php if ( $ddesc )  : ?><p class="download-desc"><?php echo esc_html( $ddesc ); ?></p><?php endif; ?>
          <div class="download-meta">
            <?php if ( $dtype ) : ?><span class="download-type"><?php echo esc_html( $dtype ); ?></span><?php endif; ?>
            <?php if ( $dsize ) : ?><span class="download-size"><?php echo esc_html( $dsize ); ?></span><?php endif; ?>
          </div>
        </div>
        <?php if ( $durl ) : ?>
          <a
            href="<?php echo esc_url( $durl ); ?>"
            class="download-btn btn btn-outline"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            <?php echo blrt_icon( 'arrow-right', 'icon' ); ?>
            <?php esc_html_e( 'Download', 'blrt' ); ?>
          </a>
        <?php endif; ?>
      </li>
      <?php endforeach; ?>
    </ul>
  </div>
</section>

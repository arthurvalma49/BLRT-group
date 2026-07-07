<?php
$b      = $args['block'] ?? [];
$label  = $b['label'] ?? '';
$title  = $b['title'] ?? '';
$url    = $b['video_url'] ?? '';
$poster = $b['poster'] ?? null;
$desc   = $b['description'] ?? '';
if ( ! $url ) return;

// Build embed URL
$embed = $url;
if ( strpos( $url, 'youtube.com/watch?v=' ) !== false ) {
  preg_match( '/v=([^&]+)/', $url, $m );
  $embed = 'https://www.youtube.com/embed/' . ( $m[1] ?? '' );
} elseif ( strpos( $url, 'youtu.be/' ) !== false ) {
  $embed = 'https://www.youtube.com/embed/' . basename( $url );
} elseif ( strpos( $url, 'vimeo.com/' ) !== false ) {
  $embed = 'https://player.vimeo.com/video/' . basename( $url );
}
$is_embed = ( $embed !== $url );
?>
<section class="block-video bg-light reveal">
  <div class="container-pro">
    <div class="section-header">
      <div class="section-header-left">
        <?php if ( $label ) : ?><p class="overline"><?php echo esc_html( $label ); ?></p><?php endif; ?>
        <?php if ( $title ) : ?><h2 class="heading-underline"><?php echo esc_html( $title ); ?></h2><?php endif; ?>
      </div>
    </div>
    <?php if ( $desc ) : ?><p style="color:var(--color-muted);max-width:65ch;margin-bottom:1.5rem;"><?php echo esc_html( $desc ); ?></p><?php endif; ?>
    <div class="video-wrapper">
      <?php if ( $poster ) : ?>
      <div class="video-poster">
        <img src="<?php echo esc_url( $poster['url'] ); ?>" alt="<?php echo esc_attr( $poster['alt'] ?? $title ); ?>" loading="lazy">
        <div class="video-play-btn">
          <button aria-label="<?php esc_attr_e( 'Play video', 'blrt' ); ?>">
            <?php echo blrt_icon( 'play', 'icon' ); ?>
          </button>
        </div>
      </div>
      <?php endif; ?>
      <div class="video-iframe"<?php if ( $poster ) : ?> style="display:none"<?php endif; ?>>
        <?php if ( $is_embed ) : ?>
          <iframe data-src="<?php echo esc_url( $embed ); ?>"<?php if ( ! $poster ) : ?> src="<?php echo esc_url( $embed ); ?>"<?php endif; ?> title="<?php echo esc_attr( $title ); ?>" allow="autoplay;fullscreen;picture-in-picture" allowfullscreen loading="lazy"></iframe>
        <?php else : ?>
          <video controls preload="metadata"<?php if ( $poster ) : ?> poster="<?php echo esc_url( $poster['url'] ?? '' ); ?>"<?php endif; ?>>
            <source src="<?php echo esc_url( $url ); ?>" type="video/mp4">
          </video>
        <?php endif; ?>
      </div>
    </div>
  </div>
</section>

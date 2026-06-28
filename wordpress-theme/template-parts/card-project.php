<?php
$post     = $args['post'] ?? get_post();
$thumb    = get_the_post_thumbnail_url( $post, 'large' );
$category = blrt_field( 'category', $post->ID, '' );
$year     = blrt_field( 'year',     $post->ID, '' );
$location = blrt_field( 'location', $post->ID, '' );
?>
<article class="project-card">
  <?php if ( $thumb ) : ?>
  <a href="<?php echo esc_url( get_permalink( $post ) ); ?>" class="project-image" tabindex="-1" aria-hidden="true">
    <img src="<?php echo esc_url( $thumb ); ?>" alt="<?php echo esc_attr( get_the_title( $post ) ); ?>" loading="lazy">
  </a>
  <?php endif; ?>
  <div class="project-card-body">
    <div class="project-meta">
      <?php if ( $category ) : ?><span class="meta-category"><?php echo esc_html( $category ); ?></span><?php endif; ?>
      <?php if ( $year )     : ?><span class="meta-year"><?php echo esc_html( $year ); ?></span><?php endif; ?>
    </div>
    <h3><?php echo esc_html( get_the_title( $post ) ); ?></h3>
    <p><?php echo esc_html( get_the_excerpt( $post ) ); ?></p>
    <a href="<?php echo esc_url( get_permalink( $post ) ); ?>" class="project-link">
      <?php esc_html_e( 'View project', 'blrt' ); ?>
      <?php echo blrt_icon( 'arrow-right', 'icon' ); ?>
    </a>
  </div>
</article>

<?php
$post     = $args['post'] ?? get_post();
$thumb    = get_the_post_thumbnail_url( $post, 'large' );
$cat      = get_the_category( $post->ID );
$cat_name = ! empty( $cat ) ? $cat[0]->name : '';
$date     = get_the_date( 'd M Y', $post );
?>
<article class="news-card">
  <?php if ( $thumb ) : ?>
  <a href="<?php echo esc_url( get_permalink( $post ) ); ?>" class="news-image" tabindex="-1" aria-hidden="true">
    <img src="<?php echo esc_url( $thumb ); ?>" alt="<?php echo esc_attr( get_the_title( $post ) ); ?>" loading="lazy">
  </a>
  <?php endif; ?>
  <div class="news-card-body">
    <?php if ( $cat_name ) : ?><p class="news-category"><?php echo esc_html( $cat_name ); ?></p><?php endif; ?>
    <h3><a href="<?php echo esc_url( get_permalink( $post ) ); ?>"><?php echo esc_html( get_the_title( $post ) ); ?></a></h3>
    <p><?php echo esc_html( get_the_excerpt( $post ) ); ?></p>
    <time class="news-date" datetime="<?php echo esc_attr( get_the_date( 'Y-m-d', $post ) ); ?>"><?php echo esc_html( $date ); ?></time>
  </div>
</article>

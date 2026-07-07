<?php
$b      = $args['block'] ?? [];
$label  = $b['label'] ?? '';
$title  = $b['title'] ?? '';
$limit  = intval( $b['limit'] ?? 3 );
$va_url = $b['view_all_url'] ?? '';

$posts = get_posts( [ 'post_type' => 'post', 'posts_per_page' => $limit, 'post_status' => 'publish' ] );
if ( empty( $posts ) ) return;
?>
<section class="block-news bg-light reveal">
  <div class="container-pro">
    <div class="section-header">
      <div class="section-header-left">
        <?php if ( $label ) : ?><p class="overline"><?php echo esc_html( $label ); ?></p><?php endif; ?>
        <?php if ( $title ) : ?><h2 class="heading-underline"><?php echo esc_html( $title ); ?></h2><?php endif; ?>
      </div>
      <?php if ( $va_url ) : ?>
        <a href="<?php echo esc_url( $va_url ); ?>" class="view-all-link">
          <?php esc_html_e( 'All news', 'blrt' ); ?>
          <?php echo blrt_icon( 'arrow-right', 'icon' ); ?>
        </a>
      <?php endif; ?>
    </div>
    <div class="news-grid">
      <?php foreach ( $posts as $post ) :
        setup_postdata( $post );
        get_template_part( 'template-parts/card', 'news', [ 'post' => $post ] );
      endforeach;
      wp_reset_postdata(); ?>
    </div>
  </div>
</section>

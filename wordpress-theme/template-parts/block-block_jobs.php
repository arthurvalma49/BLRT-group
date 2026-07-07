<?php
$b      = $args['block'] ?? [];
$label  = $b['label'] ?? '';
$title  = $b['title'] ?? '';
$cslug  = $b['company_slug'] ?? '';
$limit  = intval( $b['limit'] ?? 10 );

$qargs = [ 'post_type' => 'job', 'posts_per_page' => $limit, 'post_status' => 'publish' ];
if ( $cslug ) $qargs['meta_query'] = [ [ 'key' => 'company_slug', 'value' => $cslug ] ];
$posts = get_posts( $qargs );
if ( empty( $posts ) ) return;
?>
<section class="block-jobs bg-surface reveal">
  <div class="container-pro">
    <div class="section-header">
      <div class="section-header-left">
        <?php if ( $label ) : ?><p class="overline"><?php echo esc_html( $label ); ?></p><?php endif; ?>
        <?php if ( $title ) : ?><h2 class="heading-underline"><?php echo esc_html( $title ); ?></h2><?php endif; ?>
      </div>
    </div>
    <div class="jobs-list">
      <?php foreach ( $posts as $post ) :
        setup_postdata( $post );
        get_template_part( 'template-parts/card', 'job', [ 'post' => $post ] );
      endforeach;
      wp_reset_postdata(); ?>
    </div>
  </div>
</section>

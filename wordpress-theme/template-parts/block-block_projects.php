<?php
$b       = $args['block'] ?? [];
$label   = $b['label'] ?? '';
$title   = $b['title'] ?? '';
$source  = $b['source'] ?? 'all';
$cslug   = $b['company_slug'] ?? '';
$limit   = intval( $b['limit'] ?? 6 );
$va_url  = $b['view_all_url'] ?? '';

$query_args = [
  'post_type'      => 'project',
  'posts_per_page' => $limit,
  'post_status'    => 'publish',
];
if ( $source === 'featured' ) {
  $query_args['meta_query'] = [ [ 'key' => 'featured', 'value' => '1' ] ];
} elseif ( $source === 'company' && $cslug ) {
  $query_args['meta_query'] = [ [ 'key' => 'company_slug', 'value' => $cslug ] ];
}
$posts = get_posts( $query_args );
if ( empty( $posts ) ) return;
?>
<section class="block-projects bg-surface reveal">
  <div class="container-pro">
    <div class="section-header">
      <div class="section-header-left">
        <?php if ( $label ) : ?><p class="overline"><?php echo esc_html( $label ); ?></p><?php endif; ?>
        <?php if ( $title ) : ?><h2 class="heading-underline"><?php echo esc_html( $title ); ?></h2><?php endif; ?>
      </div>
      <?php if ( $va_url ) : ?>
        <a href="<?php echo esc_url( $va_url ); ?>" class="view-all-link">
          <?php esc_html_e( 'View all', 'blrt' ); ?>
          <?php echo blrt_icon( 'arrow-right', 'icon' ); ?>
        </a>
      <?php endif; ?>
    </div>
    <div class="projects-grid">
      <?php foreach ( $posts as $post ) :
        setup_postdata( $post );
        get_template_part( 'template-parts/card', 'project', [ 'post' => $post ] );
      endforeach;
      wp_reset_postdata(); ?>
    </div>
  </div>
</section>

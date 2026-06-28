<?php get_header(); ?>
<?php if ( have_posts() ) : while ( have_posts() ) : the_post();
  $pid      = get_the_ID();
  $client   = blrt_field( 'client',     $pid, '' );
  $year     = blrt_field( 'year',       $pid, '' );
  $location = blrt_field( 'location',   $pid, '' );
  $category = blrt_field( 'category',   $pid, '' );
  $gallery  = blrt_field( 'gallery',    $pid, [] );
  $specs    = blrt_field( 'tech_specs', $pid, [] );
  $archive  = get_post_type_archive_link( 'project' );
?>
<main id="main" role="main">
  <section class="single-hero bg-dark dot-grid">
    <div class="container-pro">
      <a href="<?php echo esc_url( $archive ); ?>" class="back-link">
        <?php echo blrt_icon( 'arrow-right', 'icon' ); ?>
        <?php esc_html_e( 'All projects', 'blrt' ); ?>
      </a>
      <div class="single-meta">
        <?php if ( $category ) : ?><span><?php echo esc_html( $category ); ?></span><?php endif; ?>
        <?php if ( $year )     : ?><span><?php echo esc_html( $year ); ?></span><?php endif; ?>
        <?php if ( $location ) : ?><span><?php echo esc_html( $location ); ?></span><?php endif; ?>
        <?php if ( $client )   : ?><span><?php echo esc_html( $client ); ?></span><?php endif; ?>
      </div>
      <h1><?php the_title(); ?></h1>
    </div>
  </section>

  <?php if ( has_post_thumbnail() ) : ?>
  <div style="max-height:560px;overflow:hidden;">
    <?php the_post_thumbnail( 'full', [ 'style' => 'width:100%;height:100%;object-fit:cover;', 'loading' => 'eager' ] ); ?>
  </div>
  <?php endif; ?>

  <section class="single-content bg-light">
    <div class="container-pro">
      <div class="entry-content"><?php the_content(); ?></div>
    </div>
  </section>

  <?php if ( ! empty( $specs ) ) :
    // Reuse the tech_data block partial
    get_template_part( 'template-parts/block', 'block_tech_data', [
      'block' => [ 'label' => __( 'Specifications', 'blrt' ), 'title' => __( 'Technical Data', 'blrt' ), 'rows' => $specs ],
    ] );
  endif; ?>

  <?php if ( ! empty( $gallery ) ) :
    get_template_part( 'template-parts/block', 'block_gallery', [
      'block' => [ 'label' => __( 'Gallery', 'blrt' ), 'title' => __( 'Project Photos', 'blrt' ), 'images' => $gallery, 'columns' => '3' ],
    ] );
  endif; ?>
</main>
<?php endwhile; endif; ?>
<?php get_footer(); ?>

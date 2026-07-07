<?php get_header(); ?>
<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
<main id="main" role="main">
  <section class="single-hero bg-dark dot-grid">
    <div class="container-pro">
      <a href="<?php echo esc_url( get_post_type_archive_link( get_post_type() ) ?: home_url( '/news' ) ); ?>" class="back-link">
        <?php echo blrt_icon( 'arrow-right', 'icon' ); ?>
        <?php esc_html_e( 'Back', 'blrt' ); ?>
      </a>
      <?php $cats = get_the_category(); ?>
      <?php if ( $cats ) : ?>
      <div class="single-meta">
        <span><?php echo esc_html( $cats[0]->name ); ?></span>
        <span><?php echo esc_html( get_the_date( 'd M Y' ) ); ?></span>
      </div>
      <?php endif; ?>
      <h1><?php the_title(); ?></h1>
    </div>
  </section>

  <?php if ( has_post_thumbnail() ) : ?>
  <div style="max-height:520px;overflow:hidden;">
    <?php the_post_thumbnail( 'full', [ 'style' => 'width:100%;height:100%;object-fit:cover;', 'loading' => 'eager' ] ); ?>
  </div>
  <?php endif; ?>

  <section class="single-content bg-light">
    <div class="container-pro">
      <div class="entry-content"><?php the_content(); ?></div>
    </div>
  </section>
</main>
<?php endwhile; endif; ?>
<?php get_footer(); ?>

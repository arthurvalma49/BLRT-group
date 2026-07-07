<?php get_header(); ?>
<main id="main" role="main">
  <section class="archive-hero bg-dark">
    <div class="container-pro">
      <p class="overline" style="color:rgba(255,255,255,.4);margin-bottom:.75rem;"><?php esc_html_e( 'Archive', 'blrt' ); ?></p>
      <h1><?php the_archive_title(); ?></h1>
    </div>
  </section>
  <section style="padding:5rem 0;" class="bg-light">
    <div class="container-pro">
      <div class="news-grid">
        <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
          <?php get_template_part( 'template-parts/card', 'news', [ 'post' => get_post() ] ); ?>
        <?php endwhile; endif; ?>
      </div>
      <div class="pagination"><?php echo paginate_links(); ?></div>
    </div>
  </section>
</main>
<?php get_footer(); ?>

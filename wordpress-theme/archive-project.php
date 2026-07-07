<?php get_header(); ?>
<main id="main" role="main">
  <section class="archive-hero bg-dark">
    <div class="container-pro">
      <p class="overline" style="color:rgba(255,255,255,.4);margin-bottom:.75rem;"><?php esc_html_e( 'Portfolio', 'blrt' ); ?></p>
      <h1><?php esc_html_e( 'Projects', 'blrt' ); ?></h1>
      <p style="color:rgba(255,255,255,.55);max-width:60ch;margin-top:1rem;"><?php esc_html_e( 'Completed and ongoing projects across all sectors.', 'blrt' ); ?></p>
    </div>
  </section>
  <section style="padding:5rem 0;" class="bg-light">
    <div class="container-pro">
      <div class="projects-grid">
        <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
          <?php get_template_part( 'template-parts/card', 'project', [ 'post' => get_post() ] ); ?>
        <?php endwhile; endif; ?>
      </div>
      <div class="pagination"><?php echo paginate_links(); ?></div>
    </div>
  </section>
</main>
<?php get_footer(); ?>

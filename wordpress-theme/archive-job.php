<?php get_header(); ?>
<main id="main" role="main">
  <section class="archive-hero bg-dark">
    <div class="container-pro">
      <p class="overline" style="color:rgba(255,255,255,.4);margin-bottom:.75rem;"><?php esc_html_e( 'Join Us', 'blrt' ); ?></p>
      <h1><?php esc_html_e( 'Careers', 'blrt' ); ?></h1>
      <p style="color:rgba(255,255,255,.55);max-width:60ch;margin-top:1rem;"><?php esc_html_e( 'Open positions across the BLRT Grupp.', 'blrt' ); ?></p>
    </div>
  </section>
  <section style="padding:5rem 0;" class="bg-light">
    <div class="container-pro">
      <?php
      // Company filter pills
      $companies = get_posts( [
        'post_type'   => 'job',
        'numberposts' => -1,
        'fields'      => 'ids',
      ] );
      $seen = [];
      $pills = [];
      foreach ( $companies as $id ) {
        $name = blrt_field( 'company_name', $id, get_the_title( $id ) );
        $slug = blrt_field( 'company_slug', $id, sanitize_title( get_the_title( $id ) ) );
        if ( $slug && ! isset( $seen[ $slug ] ) ) {
          $seen[ $slug ] = true;
          $pills[] = [ 'name' => $name, 'slug' => $slug ];
        }
      }
      if ( ! empty( $pills ) ) :
      ?>
      <div style="display:flex;flex-wrap:wrap;gap:.5rem;margin-bottom:2rem;">
        <button class="btn btn-outline" data-job-filter="all" style="padding:.4rem .875rem;font-size:.75rem;"><?php esc_html_e( 'All', 'blrt' ); ?></button>
        <?php foreach ( $pills as $p ) : ?>
          <button class="btn btn-outline" data-job-filter="<?php echo esc_attr( $p['slug'] ); ?>" style="padding:.4rem .875rem;font-size:.75rem;"><?php echo esc_html( $p['name'] ); ?></button>
        <?php endforeach; ?>
      </div>
      <?php endif; ?>

      <div class="jobs-list">
        <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
          <?php get_template_part( 'template-parts/card', 'job', [ 'post' => get_post() ] ); ?>
        <?php endwhile; endif; ?>
      </div>
      <div class="pagination"><?php echo paginate_links(); ?></div>
    </div>
  </section>
</main>
<?php get_footer(); ?>

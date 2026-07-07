<?php get_header(); ?>
<?php if ( have_posts() ) : while ( have_posts() ) : the_post();
  $pid          = get_the_ID();
  $company      = blrt_field( 'company_name', $pid, '' );
  $location     = blrt_field( 'location',     $pid, '' );
  $type         = blrt_field( 'type',         $pid, '' );
  $deadline     = blrt_field( 'deadline',     $pid, '' );
  $salary       = blrt_field( 'salary_range', $pid, '' );
  $requirements = blrt_field( 'requirements', $pid, '' );
  $duties       = blrt_field( 'duties',       $pid, '' );
  $apply_url    = blrt_field( 'apply_url',    $pid, '' );
  $archive      = get_post_type_archive_link( 'job' );
?>
<main id="main" role="main">
  <section class="single-hero bg-dark dot-grid">
    <div class="container-pro">
      <a href="<?php echo esc_url( $archive ); ?>" class="back-link">
        <?php echo blrt_icon( 'arrow-right', 'icon' ); ?>
        <?php esc_html_e( 'All positions', 'blrt' ); ?>
      </a>
      <div class="single-meta">
        <?php if ( $company  ) : ?><span><?php echo esc_html( $company ); ?></span><?php endif; ?>
        <?php if ( $location ) : ?><span><?php echo esc_html( $location ); ?></span><?php endif; ?>
        <?php if ( $type     ) : ?><span><?php echo esc_html( $type ); ?></span><?php endif; ?>
        <?php if ( $deadline ) : ?><span><?php printf( esc_html__( 'Deadline: %s', 'blrt' ), esc_html( $deadline ) ); ?></span><?php endif; ?>
      </div>
      <h1><?php the_title(); ?></h1>
      <?php if ( $apply_url ) : ?>
        <a href="<?php echo esc_url( $apply_url ); ?>" class="btn btn-primary" style="margin-top:1.5rem;" target="_blank" rel="noopener noreferrer">
          <?php esc_html_e( 'Apply Now', 'blrt' ); ?>
          <?php echo blrt_icon( 'arrow-right', 'icon' ); ?>
        </a>
      <?php endif; ?>
    </div>
  </section>

  <section class="single-content bg-light">
    <div class="container-pro" style="display:grid;gap:3rem;grid-template-columns:1fr;">
      <?php if ( $duties ) : ?>
      <div>
        <h2 style="margin-bottom:1rem;"><?php esc_html_e( 'Responsibilities', 'blrt' ); ?></h2>
        <div class="entry-content"><?php echo wp_kses_post( $duties ); ?></div>
      </div>
      <?php endif; ?>

      <?php if ( $requirements ) : ?>
      <div>
        <h2 style="margin-bottom:1rem;"><?php esc_html_e( 'Requirements', 'blrt' ); ?></h2>
        <div class="entry-content"><?php echo wp_kses_post( $requirements ); ?></div>
      </div>
      <?php endif; ?>

      <?php if ( get_the_content() ) : ?>
      <div class="entry-content"><?php the_content(); ?></div>
      <?php endif; ?>

      <?php if ( ! $apply_url ) : ?>
        <?php
        // Show built-in contact form for job application
        get_template_part( 'template-parts/block', 'block_contact_form', [
          'block' => [
            'title'    => __( 'Apply for this position', 'blrt' ),
            'show_map' => false,
            'to_email' => get_option( 'admin_email' ),
          ],
        ] );
        ?>
      <?php else : ?>
      <div>
        <a href="<?php echo esc_url( $apply_url ); ?>" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
          <?php esc_html_e( 'Apply Now', 'blrt' ); ?>
          <?php echo blrt_icon( 'external-link', 'icon' ); ?>
        </a>
      </div>
      <?php endif; ?>
    </div>
  </section>
</main>
<?php endwhile; endif; ?>
<?php get_footer(); ?>

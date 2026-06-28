<?php
/**
 * Template Name: Business / Company Page
 * Template Post Type: page
 *
 * Used for individual company pages within BLRT Grupp.
 * The page's "Content Blocks" flexible content field drives the output —
 * add Hero, About, Services, Products, Projects, Certificates, Tech Data,
 * Contact Form etc. blocks in the WordPress admin.
 */
get_header();
?>
<main id="main" role="main">
<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

  <?php
  $blocks = function_exists( 'get_field' ) ? get_field( 'content_blocks' ) : false;
  if ( $blocks ) :
    foreach ( $blocks as $block ) :
      get_template_part( 'template-parts/block', $block['acf_fc_layout'], [ 'block' => $block ] );
    endforeach;
  else : ?>
    <!-- Minimal default layout when no blocks defined -->
    <section class="single-hero bg-dark dot-grid">
      <div class="container-pro">
        <h1><?php the_title(); ?></h1>
        <?php if ( get_the_excerpt() ) : ?>
          <p style="color:rgba(255,255,255,.6);max-width:60ch;margin-top:1rem;"><?php the_excerpt(); ?></p>
        <?php endif; ?>
      </div>
    </section>
    <section class="single-content bg-light">
      <div class="container-pro">
        <div class="entry-content"><?php the_content(); ?></div>
      </div>
    </section>
  <?php endif; ?>

<?php endwhile; endif; ?>
</main>
<?php get_footer(); ?>

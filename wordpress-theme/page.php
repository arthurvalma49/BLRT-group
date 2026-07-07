<?php get_header(); ?>
<main id="main" role="main">
<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
  <?php
  $blocks = function_exists( 'get_field' ) ? get_field( 'content_blocks' ) : false;
  if ( $blocks ) :
    foreach ( $blocks as $block ) :
      get_template_part( 'template-parts/block', $block['acf_fc_layout'], [ 'block' => $block ] );
    endforeach;
  else : ?>
    <div class="container-pro" style="padding-top:5rem;padding-bottom:5rem;">
      <h1><?php the_title(); ?></h1>
      <div class="single-content"><div class="entry-content"><?php the_content(); ?></div></div>
    </div>
  <?php endif; ?>
<?php endwhile; endif; ?>
</main>
<?php get_footer(); ?>

<?php
$post     = $args['post'] ?? get_post();
$company  = blrt_field( 'company_name', $post->ID, '' );
$cslug    = blrt_field( 'company_slug', $post->ID, '' );
$location = blrt_field( 'location',     $post->ID, '' );
$type     = blrt_field( 'type',         $post->ID, '' );
$deadline = blrt_field( 'deadline',     $post->ID, '' );
$apply    = blrt_field( 'apply_url',    $post->ID, '' ) ?: get_permalink( $post );
?>
<div class="job-card" data-company="<?php echo esc_attr( $cslug ); ?>">
  <div class="job-card-left">
    <div class="job-title"><?php echo esc_html( get_the_title( $post ) ); ?></div>
    <div class="job-meta">
      <?php if ( $company  ) : ?><span class="job-company"><?php echo blrt_icon( 'building', 'icon' ); ?> <?php echo esc_html( $company ); ?></span><?php endif; ?>
      <?php if ( $location ) : ?><span class="job-location"><?php echo blrt_icon( 'map-pin', 'icon' ); ?> <?php echo esc_html( $location ); ?></span><?php endif; ?>
      <?php if ( $type     ) : ?><span class="job-type"><?php echo esc_html( $type ); ?></span><?php endif; ?>
      <?php if ( $deadline ) : ?><span class="job-deadline"><?php printf( esc_html__( 'Apply by %s', 'blrt' ), esc_html( $deadline ) ); ?></span><?php endif; ?>
    </div>
  </div>
  <div class="job-card-right">
    <a href="<?php echo esc_url( $apply ); ?>" class="btn btn-outline">
      <?php esc_html_e( 'Apply', 'blrt' ); ?>
      <?php echo blrt_icon( 'arrow-right', 'icon' ); ?>
    </a>
  </div>
</div>

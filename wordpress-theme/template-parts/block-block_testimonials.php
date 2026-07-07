<?php
$b     = $args['block'] ?? [];
$label = $b['label'] ?? '';
$title = $b['title'] ?? '';
$bg    = $b['background'] ?? 'surface';
$items = $b['items'] ?? [];
$bg_class = match( $bg ) { 'dark' => 'bg-dark', 'light' => 'bg-light', default => 'bg-surface' };
if ( empty( $items ) ) return;
?>
<section class="block-testimonials <?php echo esc_attr( $bg_class ); ?> reveal">
  <div class="container-pro">
    <?php if ( $label || $title ) : ?>
    <div class="section-header">
      <div class="section-header-left">
        <?php if ( $label ) : ?><p class="overline"><?php echo esc_html( $label ); ?></p><?php endif; ?>
        <?php if ( $title ) : ?><h2 class="heading-underline"><?php echo esc_html( $title ); ?></h2><?php endif; ?>
      </div>
    </div>
    <?php endif; ?>

    <div class="testimonials-grid">
      <?php foreach ( $items as $t ) :
        $quote   = $t['quote'] ?? '';
        $author  = $t['author'] ?? '';
        $role    = $t['role'] ?? '';
        $company = $t['company'] ?? '';
        $avatar  = $t['image'] ?? null;
        $logo    = $t['logo'] ?? null;
      ?>
      <blockquote class="testimonial-card">
        <div class="testimonial-quote-mark" aria-hidden="true">"</div>
        <?php if ( $quote ) : ?>
          <p class="testimonial-text"><?php echo esc_html( $quote ); ?></p>
        <?php endif; ?>
        <footer class="testimonial-footer">
          <?php if ( $avatar ) : ?>
            <img src="<?php echo esc_url( $avatar['sizes']['thumbnail'] ?? $avatar['url'] ); ?>" alt="<?php echo esc_attr( $avatar['alt'] ?? $author ); ?>" class="testimonial-avatar" loading="lazy">
          <?php else : ?>
            <div class="testimonial-avatar-placeholder" aria-hidden="true"><?php echo blrt_icon( 'user', 'icon' ); ?></div>
          <?php endif; ?>
          <div class="testimonial-attribution">
            <?php if ( $author )  : ?><cite class="testimonial-author"><?php echo esc_html( $author ); ?></cite><?php endif; ?>
            <?php if ( $role )    : ?><span class="testimonial-role"><?php echo esc_html( $role ); ?></span><?php endif; ?>
            <?php if ( $company ) : ?><span class="testimonial-company"><?php echo esc_html( $company ); ?></span><?php endif; ?>
          </div>
          <?php if ( $logo ) : ?>
            <img src="<?php echo esc_url( $logo['url'] ); ?>" alt="<?php echo esc_attr( $company ); ?>" class="testimonial-logo" loading="lazy">
          <?php endif; ?>
        </footer>
      </blockquote>
      <?php endforeach; ?>
    </div>
  </div>
</section>

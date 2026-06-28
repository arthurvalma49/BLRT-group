<?php
$b       = $args['block'] ?? [];
$label   = $b['label'] ?? '';
$title   = $b['title'] ?? '';
$bg      = $b['background'] ?? 'light';
$members = $b['members'] ?? [];
$bg_class = match( $bg ) { 'dark' => 'bg-dark', 'surface' => 'bg-surface', default => 'bg-light' };
if ( empty( $members ) ) return;
?>
<section class="block-team <?php echo esc_attr( $bg_class ); ?> reveal">
  <div class="container-pro">
    <?php if ( $label || $title ) : ?>
    <div class="section-header">
      <div class="section-header-left">
        <?php if ( $label ) : ?><p class="overline"><?php echo esc_html( $label ); ?></p><?php endif; ?>
        <?php if ( $title ) : ?><h2 class="heading-underline"><?php echo esc_html( $title ); ?></h2><?php endif; ?>
      </div>
    </div>
    <?php endif; ?>

    <div class="team-grid">
      <?php foreach ( $members as $m ) :
        $name     = $m['name'] ?? '';
        $role     = $m['role'] ?? '';
        $bio      = $m['bio'] ?? '';
        $image    = $m['image'] ?? null;
        $linkedin = $m['linkedin'] ?? '';
        $email    = $m['email'] ?? '';
      ?>
      <div class="team-card">
        <div class="team-photo">
          <?php if ( $image ) : ?>
            <img
              src="<?php echo esc_url( $image['sizes']['medium'] ?? $image['url'] ); ?>"
              alt="<?php echo esc_attr( $image['alt'] ?? $name ); ?>"
              loading="lazy"
            >
          <?php else : ?>
            <div class="team-photo-placeholder" aria-hidden="true">
              <?php echo blrt_icon( 'user', 'icon' ); ?>
            </div>
          <?php endif; ?>
        </div>
        <div class="team-info">
          <?php if ( $name ) : ?><div class="team-name"><?php echo esc_html( $name ); ?></div><?php endif; ?>
          <?php if ( $role ) : ?><div class="team-role"><?php echo esc_html( $role ); ?></div><?php endif; ?>
          <?php if ( $bio )  : ?><p class="team-bio"><?php echo esc_html( $bio ); ?></p><?php endif; ?>
          <?php if ( $linkedin || $email ) : ?>
          <div class="team-links">
            <?php if ( $email ) : ?>
              <a href="<?php echo esc_url( 'mailto:' . $email ); ?>" class="team-link" aria-label="<?php echo esc_attr( sprintf( __( 'Email %s', 'blrt' ), $name ) ); ?>">
                <?php echo blrt_icon( 'mail', 'icon' ); ?>
              </a>
            <?php endif; ?>
            <?php if ( $linkedin ) : ?>
              <a href="<?php echo esc_url( $linkedin ); ?>" class="team-link" target="_blank" rel="noopener noreferrer" aria-label="<?php echo esc_attr( sprintf( __( '%s on LinkedIn', 'blrt' ), $name ) ); ?>">
                <?php echo blrt_icon( 'linkedin', 'icon' ); ?>
              </a>
            <?php endif; ?>
          </div>
          <?php endif; ?>
        </div>
      </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

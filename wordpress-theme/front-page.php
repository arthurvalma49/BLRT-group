<?php get_header(); ?>

<?php
/* Homepage — uses ACF Flexible Content blocks.
   Falls back to a fully-populated static homepage when ACF is not active. */

$blocks = function_exists( 'get_field' ) ? get_field( 'content_blocks' ) : false;
?>

<main id="main" role="main">

<?php if ( $blocks ) : ?>
  <?php foreach ( $blocks as $block ) : ?>
    <?php get_template_part( 'template-parts/block', $block['acf_fc_layout'], [ 'block' => $block ] ); ?>
  <?php endforeach; ?>

<?php else : ?>
<?php
// Static fallback — populated from React prototype content (no ACF required)
$d       = blrt_defaults();
$sectors = $d['sectors'];
?>

  <!-- Hero -->
  <section class="block-hero reveal">
    <div class="hero-overlay"></div>
    <div class="container-pro hero-content">
      <div class="hero-badge">Since 1912</div>
      <h1>Baltic industry,<br><span>built to endure.</span></h1>
      <p class="hero-desc">24 companies. 6 industrial sectors. Over a century of shipbuilding and maritime engineering across Estonia, Latvia, Lithuania and Finland.</p>
      <div class="hero-actions">
        <a href="<?php echo esc_url( home_url( '/about' ) ); ?>" class="btn btn-primary">
          About BLRT Grupp
          <?php echo blrt_icon( 'arrow-right', 'icon' ); ?>
        </a>
        <a href="<?php echo esc_url( home_url( '/contacts' ) ); ?>" class="btn btn-ghost">Contact Us</a>
      </div>
    </div>
  </section>

  <!-- Stats -->
  <section class="block-stats bg-dark reveal">
    <div class="container-pro">
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-value" data-target="24" data-suffix="">0</div>
          <div class="stat-label">Companies</div>
        </div>
        <div class="stat-card">
          <div class="stat-value" data-target="5" data-suffix="">0</div>
          <div class="stat-label">Countries</div>
        </div>
        <div class="stat-card">
          <div class="stat-value" data-target="6" data-suffix="">0</div>
          <div class="stat-label">Sectors</div>
        </div>
        <div class="stat-card">
          <div class="stat-value" data-target="1912" data-suffix="">0</div>
          <div class="stat-label">Founded</div>
        </div>
      </div>
    </div>
  </section>

  <!-- About -->
  <section class="block-about bg-light reveal">
    <div class="container-pro">
      <div class="about-grid">
        <div class="about-text">
          <p class="overline">About BLRT Grupp</p>
          <h2 class="heading-underline" style="margin:.75rem 0 1.5rem;">Over a century of Baltic industrial operations</h2>
          <p>BLRT Grupp is one of the largest industrial holding companies in the Baltic region, with roots stretching back to 1912. From shipbuilding and ship repair to marine inspection, engineering and materials, we operate 24 companies across five countries.</p>
          <p>Our companies share engineering expertise, shipyard infrastructure and a network of maritime specialists across the Baltic Sea region.</p>
          <a href="<?php echo esc_url( home_url( '/about' ) ); ?>" class="btn btn-outline" style="margin-top:2rem;">
            Learn More
            <?php echo blrt_icon( 'arrow-right', 'icon' ); ?>
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Companies Grid -->
  <section class="block-companies-grid bg-light reveal">
    <div class="container-pro">
      <div class="section-header">
        <div class="section-header-left">
          <p class="overline">Our Portfolio</p>
          <h2 class="heading-underline">24 Companies Across 6 Sectors</h2>
        </div>
      </div>

      <nav class="cg-quickjump" aria-label="Jump to sector">
        <?php foreach ( $sectors as $sector ) : ?>
          <a href="#sector-<?php echo esc_attr( sanitize_html_class( $sector['sector_id'] ) ); ?>" class="cg-jump-btn">
            <?php echo esc_html( $sector['sector_label'] ); ?>
          </a>
        <?php endforeach; ?>
      </nav>

      <div class="cg-sectors">
        <?php foreach ( $sectors as $sector ) :
          $sid       = sanitize_html_class( $sector['sector_id'] );
          $companies = $sector['companies'];
        ?>
        <div class="cg-sector" id="sector-<?php echo esc_attr( $sid ); ?>">
          <div class="cg-sector-header">
            <span class="cg-sector-label"><?php echo esc_html( $sector['sector_label'] ); ?></span>
            <span class="cg-sector-count"><?php echo count( $companies ); ?></span>
            <div class="cg-sector-rule" aria-hidden="true"></div>
          </div>
          <div class="cg-grid">
            <?php foreach ( $companies as $co ) : ?>
            <a href="<?php echo esc_url( home_url( $co['url'] ) ); ?>" class="cg-card">
              <div class="cg-card-body">
                <div class="cg-card-header">
                  <span class="cg-co-name"><?php echo esc_html( $co['name'] ); ?></span>
                  <?php echo blrt_icon( 'external-link', 'icon cg-arrow' ); ?>
                </div>
                <?php if ( $co['countries'] ) : ?>
                  <span class="cg-co-countries"><?php echo esc_html( $co['countries'] ); ?></span>
                <?php endif; ?>
              </div>
            </a>
            <?php endforeach; ?>
          </div>
        </div>
        <?php endforeach; ?>
      </div>
    </div>
  </section>

  <!-- News CTA -->
  <section class="block-cta bg-dark reveal">
    <div class="container-pro">
      <div class="cta-inner">
        <div class="cta-text">
          <p class="overline" style="color:rgba(255,255,255,.45)">Stay Informed</p>
          <h2>Latest News</h2>
        </div>
        <a href="<?php echo esc_url( home_url( '/news' ) ); ?>" class="btn btn-primary" style="flex-shrink:0;white-space:nowrap;">
          View all news
          <?php echo blrt_icon( 'arrow-right', 'icon' ); ?>
        </a>
      </div>
    </div>
  </section>

  <!-- Projects CTA -->
  <section class="block-cta bg-surface reveal">
    <div class="container-pro">
      <div class="cta-inner">
        <div class="cta-text">
          <p class="overline" style="color:var(--color-muted)">Our Work</p>
          <h2 style="color:var(--color-primary-deep)">Featured Projects</h2>
        </div>
        <a href="<?php echo esc_url( home_url( '/projects' ) ); ?>" class="btn btn-outline" style="flex-shrink:0;white-space:nowrap;">
          See all projects
          <?php echo blrt_icon( 'arrow-right', 'icon' ); ?>
        </a>
      </div>
    </div>
  </section>

  <!-- Careers CTA -->
  <section class="block-cta reveal" style="background:var(--color-brand-red);">
    <div class="container-pro">
      <div class="cta-inner">
        <div class="cta-text">
          <p class="overline" style="color:rgba(255,255,255,.5)">Join BLRT Grupp</p>
          <h2>Join BLRT Grupp</h2>
          <p>We are always looking for talented engineers, technicians and business professionals to grow with us.</p>
        </div>
        <a href="<?php echo esc_url( home_url( '/careers' ) ); ?>" class="btn btn-ghost" style="flex-shrink:0;white-space:nowrap;">
          View Open Positions
          <?php echo blrt_icon( 'arrow-right', 'icon' ); ?>
        </a>
      </div>
    </div>
  </section>

<?php endif; ?>

</main>

<?php get_footer(); ?>

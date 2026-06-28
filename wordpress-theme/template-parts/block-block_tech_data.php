<?php
$b     = $args['block'] ?? [];
$label = $b['label'] ?? '';
$title = $b['title'] ?? '';
$rows  = $b['rows'] ?? [];
if ( empty( $rows ) ) return;
?>
<section class="block-tech-data bg-light reveal">
  <div class="container-pro">
    <div class="section-header">
      <div class="section-header-left">
        <?php if ( $label ) : ?><p class="overline"><?php echo esc_html( $label ); ?></p><?php endif; ?>
        <?php if ( $title ) : ?><h2 class="heading-underline"><?php echo esc_html( $title ); ?></h2><?php endif; ?>
      </div>
    </div>
    <div class="tech-table-wrapper">
      <table class="tech-table">
        <thead>
          <tr>
            <th><?php esc_html_e( 'Parameter', 'blrt' ); ?></th>
            <th><?php esc_html_e( 'Value', 'blrt' ); ?></th>
            <th><?php esc_html_e( 'Unit', 'blrt' ); ?></th>
          </tr>
        </thead>
        <tbody>
          <?php foreach ( $rows as $row ) : ?>
          <tr>
            <td><?php echo esc_html( $row['parameter'] ?? '' ); ?></td>
            <td><strong><?php echo esc_html( $row['value'] ?? '' ); ?></strong></td>
            <td class="tech-unit"><?php echo esc_html( $row['unit'] ?? '' ); ?></td>
          </tr>
          <?php endforeach; ?>
        </tbody>
      </table>
    </div>
  </div>
</section>

<?php
/**
 * BLRT Grupp Theme — functions.php
 * Registers: theme support, menus, CPTs, ACF field groups, WPML compat, AJAX form handler.
 */

// ─── 1. Theme Setup ───────────────────────────────────────────────────────────

add_action( 'after_setup_theme', function () {
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'html5', [ 'search-form', 'comment-form', 'gallery', 'caption' ] );
    add_theme_support( 'customize-selective-refresh-widgets' );

    register_nav_menus( [
        'primary' => __( 'Primary Navigation', 'blrt' ),
        'footer'  => __( 'Footer Navigation', 'blrt' ),
    ] );

    load_theme_textdomain( 'blrt', get_template_directory() . '/languages' );
} );

// ─── 2. Enqueue Scripts & Styles ─────────────────────────────────────────────

add_action( 'wp_enqueue_scripts', function () {
    wp_enqueue_style(
        'blrt-fonts',
        'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap',
        [],
        null
    );
    wp_enqueue_style(
        'blrt-theme',
        get_template_directory_uri() . '/assets/css/theme.css',
        [ 'blrt-fonts' ],
        '1.0.0'
    );
    wp_enqueue_script(
        'blrt-theme',
        get_template_directory_uri() . '/assets/js/theme.js',
        [],
        '1.0.0',
        true
    );
    wp_localize_script( 'blrt-theme', 'blrtAjax', [
        'url'   => admin_url( 'admin-ajax.php' ),
        'nonce' => wp_create_nonce( 'blrt_contact' ),
    ] );
} );

// ─── 3. Custom Post Types ─────────────────────────────────────────────────────

add_action( 'init', function () {

    // Projects CPT
    register_post_type( 'project', [
        'label'               => __( 'Projects', 'blrt' ),
        'labels'              => [
            'name'          => __( 'Projects', 'blrt' ),
            'singular_name' => __( 'Project', 'blrt' ),
            'add_new_item'  => __( 'Add New Project', 'blrt' ),
            'edit_item'     => __( 'Edit Project', 'blrt' ),
        ],
        'public'              => true,
        'has_archive'         => true,
        'rewrite'             => [ 'slug' => 'projects' ],
        'supports'            => [ 'title', 'editor', 'thumbnail', 'excerpt' ],
        'menu_icon'           => 'dashicons-portfolio',
        'show_in_rest'        => true,
    ] );

    // Jobs CPT
    register_post_type( 'job', [
        'label'               => __( 'Jobs', 'blrt' ),
        'labels'              => [
            'name'          => __( 'Jobs', 'blrt' ),
            'singular_name' => __( 'Job', 'blrt' ),
            'add_new_item'  => __( 'Add New Job', 'blrt' ),
            'edit_item'     => __( 'Edit Job', 'blrt' ),
        ],
        'public'              => true,
        'has_archive'         => true,
        'rewrite'             => [ 'slug' => 'careers' ],
        'supports'            => [ 'title', 'editor', 'thumbnail' ],
        'menu_icon'           => 'dashicons-id-alt',
        'show_in_rest'        => true,
    ] );
} );

// ─── 4. ACF Options Page ─────────────────────────────────────────────────────

add_action( 'acf/init', function () {
    if ( function_exists( 'acf_add_options_page' ) ) {
        acf_add_options_page( [
            'page_title' => 'Theme Settings',
            'menu_title' => 'Theme Settings',
            'menu_slug'  => 'blrt-theme-settings',
            'capability' => 'manage_options',
            'redirect'   => false,
            'icon_url'   => 'dashicons-admin-generic',
        ] );
        acf_add_options_sub_page( [
            'page_title'  => 'Company Navigation',
            'menu_title'  => 'Company Navigation',
            'parent_slug' => 'blrt-theme-settings',
        ] );
    }
} );

// ─── 5. ACF Field Groups ──────────────────────────────────────────────────────

add_action( 'acf/init', function () {
    if ( ! function_exists( 'acf_add_local_field_group' ) ) return;

    // ── 5a. Theme Options ────────────────────────────────────────────────────

    acf_add_local_field_group( [
        'key'      => 'group_theme_options',
        'title'    => 'Theme Settings',
        'fields'   => [
            [ 'key' => 'field_company_name',       'label' => 'Company Name',        'name' => 'company_name',       'type' => 'text' ],
            [ 'key' => 'field_logo',               'label' => 'Logo (dark bg)',       'name' => 'logo',               'type' => 'image', 'return_format' => 'array' ],
            [ 'key' => 'field_logo_dark',          'label' => 'Logo (light bg)',      'name' => 'logo_dark',          'type' => 'image', 'return_format' => 'array' ],
            [ 'key' => 'field_brand_red',          'label' => 'Accent colour (hex)',  'name' => 'brand_red',          'type' => 'color_picker', 'default_value' => '#9c231f' ],
            [ 'key' => 'field_footer_tagline',     'label' => 'Footer Tagline',       'name' => 'footer_tagline',     'type' => 'text' ],
            [ 'key' => 'field_footer_email',       'label' => 'Footer Email',         'name' => 'footer_email',       'type' => 'email' ],
            [ 'key' => 'field_footer_phone',       'label' => 'Footer Phone',         'name' => 'footer_phone',       'type' => 'text' ],
            [ 'key' => 'field_footer_address',     'label' => 'Footer Address',       'name' => 'footer_address',     'type' => 'text' ],
            [ 'key' => 'field_reg_code',           'label' => 'Reg. Code',            'name' => 'reg_code',           'type' => 'text' ],
            [
                'key'   => 'field_social_links',
                'label' => 'Social Links',
                'name'  => 'social_links',
                'type'  => 'repeater',
                'sub_fields' => [
                    [ 'key' => 'field_social_platform', 'label' => 'Platform', 'name' => 'platform', 'type' => 'select', 'choices' => [ 'linkedin' => 'LinkedIn', 'facebook' => 'Facebook', 'youtube' => 'YouTube', 'instagram' => 'Instagram' ] ],
                    [ 'key' => 'field_social_url',      'label' => 'URL',      'name' => 'url',      'type' => 'url' ],
                ],
            ],
            // Company navigation for megamenu
            [
                'key'   => 'field_sectors',
                'label' => 'Sectors (Megamenu)',
                'name'  => 'sectors',
                'type'  => 'repeater',
                'sub_fields' => [
                    [ 'key' => 'field_sector_id',    'label' => 'Sector ID',    'name' => 'sector_id',    'type' => 'text' ],
                    [ 'key' => 'field_sector_label', 'label' => 'Sector Label', 'name' => 'sector_label', 'type' => 'text' ],
                    [
                        'key'   => 'field_sector_companies',
                        'label' => 'Companies',
                        'name'  => 'companies',
                        'type'  => 'repeater',
                        'sub_fields' => [
                            [ 'key' => 'field_co_name',      'label' => 'Name',      'name' => 'name',      'type' => 'text' ],
                            [ 'key' => 'field_co_url',       'label' => 'URL',       'name' => 'url',       'type' => 'url' ],
                            [ 'key' => 'field_co_countries', 'label' => 'Countries', 'name' => 'countries', 'type' => 'text' ],
                            [ 'key' => 'field_co_tagline',   'label' => 'Tagline',   'name' => 'tagline',   'type' => 'text' ],
                        ],
                    ],
                ],
            ],
        ],
        'location' => [ [ [ 'param' => 'options_page', 'operator' => '==', 'value' => 'blrt-theme-settings' ] ] ],
    ] );

    // ── 5b. Flexible Content — all Pages ─────────────────────────────────────

    acf_add_local_field_group( [
        'key'    => 'group_page_blocks',
        'title'  => 'Page Content Blocks',
        'fields' => [
            [
                'key'          => 'field_content_blocks',
                'label'        => 'Content Blocks',
                'name'         => 'content_blocks',
                'type'         => 'flexible_content',
                'button_label' => 'Add Block',
                'layouts'      => [

                    // ── Hero ───────────────────────────────────────────────
                    'layout_hero' => [
                        'key'        => 'layout_hero',
                        'name'       => 'block_hero',
                        'label'      => 'Hero / Banner',
                        'display'    => 'block',
                        'sub_fields' => [
                            [ 'key' => 'field_hero_image',           'label' => 'Background Image',    'name' => 'image',           'type' => 'image',    'return_format' => 'array' ],
                            [ 'key' => 'field_hero_badge',           'label' => 'Badge Text',          'name' => 'badge',           'type' => 'text' ],
                            [ 'key' => 'field_hero_title',           'label' => 'Title Line 1',        'name' => 'title',           'type' => 'text' ],
                            [ 'key' => 'field_hero_title2',          'label' => 'Title Line 2 (accent)','name' => 'title2',         'type' => 'text' ],
                            [ 'key' => 'field_hero_desc',            'label' => 'Description',         'name' => 'description',     'type' => 'textarea', 'rows' => 3 ],
                            [ 'key' => 'field_hero_btn_label',       'label' => 'Primary Button Label','name' => 'btn_label',       'type' => 'text' ],
                            [ 'key' => 'field_hero_btn_url',         'label' => 'Primary Button URL',  'name' => 'btn_url',         'type' => 'url' ],
                            [ 'key' => 'field_hero_btn2_label',      'label' => 'Secondary Button Label','name' => 'btn2_label',    'type' => 'text' ],
                            [ 'key' => 'field_hero_btn2_url',        'label' => 'Secondary Button URL','name' => 'btn2_url',        'type' => 'url' ],
                        ],
                    ],

                    // ── About / Text ───────────────────────────────────────
                    'layout_about' => [
                        'key'        => 'layout_about',
                        'name'       => 'block_about',
                        'label'      => 'About / Text Block',
                        'display'    => 'block',
                        'sub_fields' => [
                            [ 'key' => 'field_about_bg',    'label' => 'Background', 'name' => 'background', 'type' => 'select', 'choices' => [ 'light' => 'Light', 'dark' => 'Dark Navy', 'surface' => 'Surface' ], 'default_value' => 'light' ],
                            [ 'key' => 'field_about_label', 'label' => 'Overline',   'name' => 'label',      'type' => 'text' ],
                            [ 'key' => 'field_about_title', 'label' => 'Title',      'name' => 'title',      'type' => 'text' ],
                            [ 'key' => 'field_about_p1',    'label' => 'Paragraph 1','name' => 'paragraph_1','type' => 'textarea', 'rows' => 4 ],
                            [ 'key' => 'field_about_p2',    'label' => 'Paragraph 2','name' => 'paragraph_2','type' => 'textarea', 'rows' => 4 ],
                            [ 'key' => 'field_about_image', 'label' => 'Side Image', 'name' => 'image',      'type' => 'image', 'return_format' => 'array' ],
                            [ 'key' => 'field_about_link_label', 'label' => 'Link Label', 'name' => 'link_label', 'type' => 'text' ],
                            [ 'key' => 'field_about_link_url',   'label' => 'Link URL',   'name' => 'link_url',   'type' => 'url' ],
                        ],
                    ],

                    // ── Stats ──────────────────────────────────────────────
                    'layout_stats' => [
                        'key'        => 'layout_stats',
                        'name'       => 'block_stats',
                        'label'      => 'Stats / Numbers',
                        'display'    => 'block',
                        'sub_fields' => [
                            [ 'key' => 'field_stats_bg', 'label' => 'Background', 'name' => 'background', 'type' => 'select', 'choices' => [ 'dark' => 'Dark Navy', 'light' => 'Light' ], 'default_value' => 'dark' ],
                            [
                                'key'        => 'field_stats_items',
                                'label'      => 'Stats',
                                'name'       => 'stats',
                                'type'       => 'repeater',
                                'min'        => 1,
                                'max'        => 6,
                                'sub_fields' => [
                                    [ 'key' => 'field_stat_value',     'label' => 'Value',    'name' => 'value',    'type' => 'number' ],
                                    [ 'key' => 'field_stat_suffix',    'label' => 'Suffix',   'name' => 'suffix',   'type' => 'text' ],
                                    [ 'key' => 'field_stat_label',     'label' => 'Label',    'name' => 'label',    'type' => 'text' ],
                                    [ 'key' => 'field_stat_animated',  'label' => 'Animate',  'name' => 'animated', 'type' => 'true_false', 'default_value' => 1 ],
                                ],
                            ],
                        ],
                    ],

                    // ── Services ───────────────────────────────────────────
                    'layout_services' => [
                        'key'        => 'layout_services',
                        'name'       => 'block_services',
                        'label'      => 'Services Grid',
                        'display'    => 'block',
                        'sub_fields' => [
                            [ 'key' => 'field_svc_bg',    'label' => 'Background', 'name' => 'background', 'type' => 'select', 'choices' => [ 'surface' => 'Surface', 'light' => 'Light', 'dark' => 'Dark' ], 'default_value' => 'surface' ],
                            [ 'key' => 'field_svc_label', 'label' => 'Overline',   'name' => 'label',      'type' => 'text' ],
                            [ 'key' => 'field_svc_title', 'label' => 'Title',      'name' => 'title',      'type' => 'text' ],
                            [
                                'key'        => 'field_svc_items',
                                'label'      => 'Services',
                                'name'       => 'services',
                                'type'       => 'repeater',
                                'sub_fields' => [
                                    [ 'key' => 'field_svc_icon',     'label' => 'Icon',        'name' => 'icon',     'type' => 'select', 'choices' => blrt_icon_choices() ],
                                    [ 'key' => 'field_svc_name',     'label' => 'Title',       'name' => 'title',    'type' => 'text' ],
                                    [ 'key' => 'field_svc_desc',     'label' => 'Description', 'name' => 'desc',     'type' => 'textarea', 'rows' => 3 ],
                                    [ 'key' => 'field_svc_fulldesc', 'label' => 'Full Desc',   'name' => 'fullDesc', 'type' => 'textarea', 'rows' => 5 ],
                                ],
                            ],
                        ],
                    ],

                    // ── Products ───────────────────────────────────────────
                    'layout_products' => [
                        'key'        => 'layout_products',
                        'name'       => 'block_products',
                        'label'      => 'Products Grid',
                        'display'    => 'block',
                        'sub_fields' => [
                            [ 'key' => 'field_prod_label', 'label' => 'Overline', 'name' => 'label', 'type' => 'text' ],
                            [ 'key' => 'field_prod_title', 'label' => 'Title',    'name' => 'title', 'type' => 'text' ],
                            [
                                'key'        => 'field_prod_items',
                                'label'      => 'Products',
                                'name'       => 'products',
                                'type'       => 'repeater',
                                'sub_fields' => [
                                    [ 'key' => 'field_prod_name',  'label' => 'Product Name', 'name' => 'name',  'type' => 'text' ],
                                    [ 'key' => 'field_prod_desc',  'label' => 'Description',  'name' => 'desc',  'type' => 'textarea', 'rows' => 3 ],
                                    [ 'key' => 'field_prod_image', 'label' => 'Image',        'name' => 'image', 'type' => 'image', 'return_format' => 'array' ],
                                    [ 'key' => 'field_prod_specs', 'label' => 'Specs',        'name' => 'specs', 'type' => 'textarea', 'rows' => 3 ],
                                    [ 'key' => 'field_prod_tag',   'label' => 'Tag/Category', 'name' => 'tag',   'type' => 'text' ],
                                ],
                            ],
                        ],
                    ],

                    // ── Projects ───────────────────────────────────────────
                    'layout_projects' => [
                        'key'        => 'layout_projects',
                        'name'       => 'block_projects',
                        'label'      => 'Projects Grid',
                        'display'    => 'block',
                        'sub_fields' => [
                            [ 'key' => 'field_proj_label',  'label' => 'Overline',     'name' => 'label',        'type' => 'text' ],
                            [ 'key' => 'field_proj_title',  'label' => 'Title',        'name' => 'title',        'type' => 'text' ],
                            [ 'key' => 'field_proj_source', 'label' => 'Source',       'name' => 'source',       'type' => 'select', 'choices' => [ 'all' => 'All Projects', 'featured' => 'Featured Only', 'company' => 'By Company Slug' ], 'default_value' => 'all' ],
                            [ 'key' => 'field_proj_slug',   'label' => 'Company Slug', 'name' => 'company_slug', 'type' => 'text', 'instructions' => 'Required when Source = By Company Slug' ],
                            [ 'key' => 'field_proj_limit',  'label' => 'Limit',        'name' => 'limit',        'type' => 'number', 'default_value' => 6 ],
                            [ 'key' => 'field_proj_link',   'label' => 'View All URL', 'name' => 'view_all_url', 'type' => 'url' ],
                        ],
                    ],

                    // ── News ───────────────────────────────────────────────
                    'layout_news' => [
                        'key'        => 'layout_news',
                        'name'       => 'block_news',
                        'label'      => 'News Block',
                        'display'    => 'block',
                        'sub_fields' => [
                            [ 'key' => 'field_news_label', 'label' => 'Overline',     'name' => 'label',        'type' => 'text' ],
                            [ 'key' => 'field_news_title', 'label' => 'Title',        'name' => 'title',        'type' => 'text' ],
                            [ 'key' => 'field_news_limit', 'label' => 'Number shown', 'name' => 'limit',        'type' => 'number', 'default_value' => 3 ],
                            [ 'key' => 'field_news_link',  'label' => 'View All URL', 'name' => 'view_all_url', 'type' => 'url' ],
                        ],
                    ],

                    // ── Jobs ───────────────────────────────────────────────
                    'layout_jobs' => [
                        'key'        => 'layout_jobs',
                        'name'       => 'block_jobs',
                        'label'      => 'Job Listings',
                        'display'    => 'block',
                        'sub_fields' => [
                            [ 'key' => 'field_jobs_label',   'label' => 'Overline',       'name' => 'label',          'type' => 'text' ],
                            [ 'key' => 'field_jobs_title',   'label' => 'Title',          'name' => 'title',          'type' => 'text' ],
                            [ 'key' => 'field_jobs_company', 'label' => 'Company Slug',   'name' => 'company_slug',   'type' => 'text', 'instructions' => 'Leave blank to show all jobs' ],
                            [ 'key' => 'field_jobs_limit',   'label' => 'Limit',          'name' => 'limit',          'type' => 'number', 'default_value' => 10 ],
                        ],
                    ],

                    // ── Video ──────────────────────────────────────────────
                    'layout_video' => [
                        'key'        => 'layout_video',
                        'name'       => 'block_video',
                        'label'      => 'Video Block',
                        'display'    => 'block',
                        'sub_fields' => [
                            [ 'key' => 'field_video_label',  'label' => 'Overline',    'name' => 'label',       'type' => 'text' ],
                            [ 'key' => 'field_video_title',  'label' => 'Title',       'name' => 'title',       'type' => 'text' ],
                            [ 'key' => 'field_video_url',    'label' => 'Video URL',   'name' => 'video_url',   'type' => 'url', 'instructions' => 'YouTube, Vimeo, or direct .mp4 URL' ],
                            [ 'key' => 'field_video_poster', 'label' => 'Poster Image','name' => 'poster',      'type' => 'image', 'return_format' => 'array' ],
                            [ 'key' => 'field_video_desc',   'label' => 'Description', 'name' => 'description', 'type' => 'textarea', 'rows' => 3 ],
                        ],
                    ],

                    // ── Gallery ────────────────────────────────────────────
                    'layout_gallery' => [
                        'key'        => 'layout_gallery',
                        'name'       => 'block_gallery',
                        'label'      => 'Image Gallery',
                        'display'    => 'block',
                        'sub_fields' => [
                            [ 'key' => 'field_gal_label',   'label' => 'Overline', 'name' => 'label',   'type' => 'text' ],
                            [ 'key' => 'field_gal_title',   'label' => 'Title',    'name' => 'title',   'type' => 'text' ],
                            [ 'key' => 'field_gal_images',  'label' => 'Images',   'name' => 'images',  'type' => 'gallery', 'return_format' => 'array' ],
                            [ 'key' => 'field_gal_columns', 'label' => 'Columns',  'name' => 'columns', 'type' => 'select', 'choices' => [ '2' => '2', '3' => '3', '4' => '4' ], 'default_value' => '3' ],
                        ],
                    ],

                    // ── Certificates ───────────────────────────────────────
                    'layout_certificates' => [
                        'key'        => 'layout_certificates',
                        'name'       => 'block_certificates',
                        'label'      => 'Certificates / Accreditations',
                        'display'    => 'block',
                        'sub_fields' => [
                            [ 'key' => 'field_cert_label', 'label' => 'Overline', 'name' => 'label', 'type' => 'text' ],
                            [ 'key' => 'field_cert_title', 'label' => 'Title',    'name' => 'title', 'type' => 'text' ],
                            [
                                'key'        => 'field_cert_items',
                                'label'      => 'Certificates',
                                'name'       => 'certificates',
                                'type'       => 'repeater',
                                'sub_fields' => [
                                    [ 'key' => 'field_cert_name',       'label' => 'Certificate Name', 'name' => 'name',        'type' => 'text' ],
                                    [ 'key' => 'field_cert_issuer',     'label' => 'Issuing Body',     'name' => 'issuer',      'type' => 'text' ],
                                    [ 'key' => 'field_cert_number',     'label' => 'Cert. Number',     'name' => 'number',      'type' => 'text' ],
                                    [ 'key' => 'field_cert_valid',      'label' => 'Valid Until',      'name' => 'valid_until', 'type' => 'text' ],
                                    [ 'key' => 'field_cert_logo',       'label' => 'Logo',             'name' => 'logo',        'type' => 'image', 'return_format' => 'array' ],
                                ],
                            ],
                        ],
                    ],

                    // ── Technical Data Table ───────────────────────────────
                    'layout_tech_data' => [
                        'key'        => 'layout_tech_data',
                        'name'       => 'block_tech_data',
                        'label'      => 'Technical Data Table',
                        'display'    => 'block',
                        'sub_fields' => [
                            [ 'key' => 'field_td_label', 'label' => 'Overline', 'name' => 'label', 'type' => 'text' ],
                            [ 'key' => 'field_td_title', 'label' => 'Title',    'name' => 'title', 'type' => 'text' ],
                            [
                                'key'        => 'field_td_rows',
                                'label'      => 'Rows',
                                'name'       => 'rows',
                                'type'       => 'repeater',
                                'sub_fields' => [
                                    [ 'key' => 'field_td_param', 'label' => 'Parameter', 'name' => 'parameter', 'type' => 'text' ],
                                    [ 'key' => 'field_td_value', 'label' => 'Value',     'name' => 'value',     'type' => 'text' ],
                                    [ 'key' => 'field_td_unit',  'label' => 'Unit',      'name' => 'unit',      'type' => 'text' ],
                                ],
                            ],
                        ],
                    ],

                    // ── Contact Form + Map ─────────────────────────────────
                    'layout_contact_form' => [
                        'key'        => 'layout_contact_form',
                        'name'       => 'block_contact_form',
                        'label'      => 'Contact Form + Map',
                        'display'    => 'block',
                        'sub_fields' => [
                            [ 'key' => 'field_cf_title',    'label' => 'Title',       'name' => 'title',       'type' => 'text' ],
                            [ 'key' => 'field_cf_address',  'label' => 'Address',     'name' => 'address',     'type' => 'text' ],
                            [ 'key' => 'field_cf_email',    'label' => 'Email',       'name' => 'email',       'type' => 'email' ],
                            [ 'key' => 'field_cf_phone',    'label' => 'Phone',       'name' => 'phone',       'type' => 'text' ],
                            [ 'key' => 'field_cf_map_lat',  'label' => 'Map Lat',     'name' => 'map_lat',     'type' => 'text', 'default_value' => '59.4489' ],
                            [ 'key' => 'field_cf_map_lng',  'label' => 'Map Lng',     'name' => 'map_lng',     'type' => 'text', 'default_value' => '24.7259' ],
                            [ 'key' => 'field_cf_show_map', 'label' => 'Show Map',    'name' => 'show_map',    'type' => 'true_false', 'default_value' => 1 ],
                            [ 'key' => 'field_cf_to_email', 'label' => 'Send form to (email)', 'name' => 'to_email', 'type' => 'email' ],
                        ],
                    ],

                    // ── CTA Band ───────────────────────────────────────────
                    'layout_cta' => [
                        'key'        => 'layout_cta',
                        'name'       => 'block_cta',
                        'label'      => 'CTA Band',
                        'display'    => 'block',
                        'sub_fields' => [
                            [ 'key' => 'field_cta_bg',        'label' => 'Background',  'name' => 'background', 'type' => 'select', 'choices' => [ 'dark' => 'Dark Navy', 'red' => 'Brand Red' ], 'default_value' => 'dark' ],
                            [ 'key' => 'field_cta_label',     'label' => 'Overline',    'name' => 'label',      'type' => 'text' ],
                            [ 'key' => 'field_cta_title',     'label' => 'Title',       'name' => 'title',      'type' => 'text' ],
                            [ 'key' => 'field_cta_desc',      'label' => 'Description', 'name' => 'description','type' => 'textarea', 'rows' => 2 ],
                            [ 'key' => 'field_cta_btn_label', 'label' => 'Button Label','name' => 'btn_label',  'type' => 'text' ],
                            [ 'key' => 'field_cta_btn_url',   'label' => 'Button URL',  'name' => 'btn_url',    'type' => 'url' ],
                        ],
                    ],

                    // ── Presence Map ───────────────────────────────────────
                    'layout_presence_map' => [
                        'key'        => 'layout_presence_map',
                        'name'       => 'block_presence_map',
                        'label'      => 'Presence Map',
                        'display'    => 'block',
                        'sub_fields' => [
                            [ 'key' => 'field_map_label', 'label' => 'Overline',    'name' => 'label',       'type' => 'text' ],
                            [ 'key' => 'field_map_title', 'label' => 'Title',       'name' => 'title',       'type' => 'text' ],
                            [ 'key' => 'field_map_image', 'label' => 'Map Image',   'name' => 'image',       'type' => 'image', 'return_format' => 'array', 'instructions' => 'Upload your regional presence map image' ],
                            [ 'key' => 'field_map_desc',  'label' => 'Description', 'name' => 'description', 'type' => 'textarea', 'rows' => 2 ],
                        ],
                    ],

                    // ── Class Societies Strip ──────────────────────────────
                    'layout_class_societies' => [
                        'key'        => 'layout_class_societies',
                        'name'       => 'block_class_societies',
                        'label'      => 'Classification Societies Marquee',
                        'display'    => 'block',
                        'sub_fields' => [
                            [ 'key' => 'field_cs_label', 'label' => 'Overline Label', 'name' => 'label', 'type' => 'text', 'default_value' => 'Classification Societies Accepted', 'instructions' => 'Leave blank to use default list (LR, DNV, BV, ABS, RINA, KR, IR, NKK, WTA)' ],
                            [
                                'key'        => 'field_cs_items',
                                'label'      => 'Societies (optional override)',
                                'name'       => 'societies',
                                'type'       => 'repeater',
                                'instructions' => 'Leave empty to use the built-in default list.',
                                'sub_fields' => [
                                    [ 'key' => 'field_cs_abbr', 'label' => 'Abbreviation', 'name' => 'abbr', 'type' => 'text', 'instructions' => 'e.g. LR, DNV, BV' ],
                                    [ 'key' => 'field_cs_name', 'label' => 'Full Name',     'name' => 'name', 'type' => 'text' ],
                                    [ 'key' => 'field_cs_logo', 'label' => 'Logo (optional)', 'name' => 'logo', 'type' => 'image', 'return_format' => 'array' ],
                                ],
                            ],
                        ],
                    ],

                    // ── Sustainability Pillars ─────────────────────────────
                    'layout_sustainability_pillars' => [
                        'key'        => 'layout_sustainability_pillars',
                        'name'       => 'block_sustainability_pillars',
                        'label'      => 'Sustainability Pillars',
                        'display'    => 'block',
                        'sub_fields' => [
                            [ 'key' => 'field_sp_bg',    'label' => 'Background', 'name' => 'background', 'type' => 'select', 'choices' => [ 'light' => 'Light', 'surface' => 'Surface', 'dark' => 'Dark Navy' ], 'default_value' => 'light' ],
                            [ 'key' => 'field_sp_label', 'label' => 'Overline',   'name' => 'label',      'type' => 'text' ],
                            [ 'key' => 'field_sp_title', 'label' => 'Title',      'name' => 'title',      'type' => 'text' ],
                            [
                                'key'        => 'field_sp_pillars',
                                'label'      => 'Pillars',
                                'name'       => 'pillars',
                                'type'       => 'repeater',
                                'min'        => 1,
                                'max'        => 4,
                                'sub_fields' => [
                                    [ 'key' => 'field_sp_icon',         'label' => 'Icon',         'name' => 'icon',         'type' => 'select', 'choices' => blrt_icon_choices() ],
                                    [ 'key' => 'field_sp_overline',     'label' => 'Overline',     'name' => 'overline',     'type' => 'text' ],
                                    [ 'key' => 'field_sp_stat',         'label' => 'Stat Value',   'name' => 'stat',         'type' => 'text', 'instructions' => 'e.g. −14% or 3,000+' ],
                                    [ 'key' => 'field_sp_stat_label',   'label' => 'Stat Label',   'name' => 'stat_label',   'type' => 'text' ],
                                    [ 'key' => 'field_sp_heading',      'label' => 'Heading',      'name' => 'heading',      'type' => 'text' ],
                                    [ 'key' => 'field_sp_description',  'label' => 'Description',  'name' => 'description',  'type' => 'textarea', 'rows' => 3 ],
                                    [ 'key' => 'field_sp_accent_color', 'label' => 'Accent Colour','name' => 'accent_color', 'type' => 'select', 'choices' => [ 'red' => 'Brand Red', 'blue' => 'Navy Blue', 'green' => 'Green' ], 'default_value' => 'red' ],
                                ],
                            ],
                        ],
                    ],

                    // ── Companies Grid ─────────────────────────────────────
                    'layout_companies_grid' => [
                        'key'        => 'layout_companies_grid',
                        'name'       => 'block_companies_grid',
                        'label'      => 'Companies Grid (by Sector)',
                        'display'    => 'block',
                        'sub_fields' => [
                            [ 'key' => 'field_cg_label', 'label' => 'Overline', 'name' => 'label', 'type' => 'text' ],
                            [ 'key' => 'field_cg_title', 'label' => 'Title',    'name' => 'title', 'type' => 'text', 'instructions' => 'Sector/company data is pulled from Theme Settings → Company Navigation.' ],
                        ],
                    ],

                    // ── Timeline ───────────────────────────────────────────
                    'layout_timeline' => [
                        'key'        => 'layout_timeline',
                        'name'       => 'block_timeline',
                        'label'      => 'Timeline / History',
                        'display'    => 'block',
                        'sub_fields' => [
                            [ 'key' => 'field_tl_bg',    'label' => 'Background', 'name' => 'background', 'type' => 'select', 'choices' => [ 'light' => 'Light', 'surface' => 'Surface', 'dark' => 'Dark Navy' ], 'default_value' => 'light' ],
                            [ 'key' => 'field_tl_label', 'label' => 'Overline',   'name' => 'label',      'type' => 'text' ],
                            [ 'key' => 'field_tl_title', 'label' => 'Title',      'name' => 'title',      'type' => 'text' ],
                            [
                                'key'        => 'field_tl_events',
                                'label'      => 'Events',
                                'name'       => 'events',
                                'type'       => 'repeater',
                                'sub_fields' => [
                                    [ 'key' => 'field_tl_year',  'label' => 'Year',        'name' => 'year',        'type' => 'text' ],
                                    [ 'key' => 'field_tl_etit',  'label' => 'Title',       'name' => 'title',       'type' => 'text' ],
                                    [ 'key' => 'field_tl_edesc', 'label' => 'Description', 'name' => 'description', 'type' => 'textarea', 'rows' => 3 ],
                                    [ 'key' => 'field_tl_eimg',  'label' => 'Image',       'name' => 'image',       'type' => 'image', 'return_format' => 'array' ],
                                ],
                            ],
                        ],
                    ],

                    // ── Team Members ───────────────────────────────────────
                    'layout_team' => [
                        'key'        => 'layout_team',
                        'name'       => 'block_team',
                        'label'      => 'Team Members',
                        'display'    => 'block',
                        'sub_fields' => [
                            [ 'key' => 'field_tm_bg',    'label' => 'Background', 'name' => 'background', 'type' => 'select', 'choices' => [ 'light' => 'Light', 'surface' => 'Surface', 'dark' => 'Dark Navy' ], 'default_value' => 'light' ],
                            [ 'key' => 'field_tm_label', 'label' => 'Overline',   'name' => 'label',      'type' => 'text' ],
                            [ 'key' => 'field_tm_title', 'label' => 'Title',      'name' => 'title',      'type' => 'text' ],
                            [
                                'key'        => 'field_tm_members',
                                'label'      => 'Members',
                                'name'       => 'members',
                                'type'       => 'repeater',
                                'sub_fields' => [
                                    [ 'key' => 'field_tm_name',     'label' => 'Name',     'name' => 'name',     'type' => 'text' ],
                                    [ 'key' => 'field_tm_role',     'label' => 'Role',     'name' => 'role',     'type' => 'text' ],
                                    [ 'key' => 'field_tm_bio',      'label' => 'Bio',      'name' => 'bio',      'type' => 'textarea', 'rows' => 3 ],
                                    [ 'key' => 'field_tm_image',    'label' => 'Photo',    'name' => 'image',    'type' => 'image', 'return_format' => 'array' ],
                                    [ 'key' => 'field_tm_linkedin', 'label' => 'LinkedIn', 'name' => 'linkedin', 'type' => 'url' ],
                                    [ 'key' => 'field_tm_email',    'label' => 'Email',    'name' => 'email',    'type' => 'email' ],
                                ],
                            ],
                        ],
                    ],

                    // ── FAQ Accordion ──────────────────────────────────────
                    'layout_accordion_faq' => [
                        'key'        => 'layout_accordion_faq',
                        'name'       => 'block_accordion_faq',
                        'label'      => 'FAQ Accordion',
                        'display'    => 'block',
                        'sub_fields' => [
                            [ 'key' => 'field_faq_bg',    'label' => 'Background', 'name' => 'background', 'type' => 'select', 'choices' => [ 'light' => 'Light', 'surface' => 'Surface', 'dark' => 'Dark Navy' ], 'default_value' => 'light' ],
                            [ 'key' => 'field_faq_label', 'label' => 'Overline',   'name' => 'label',      'type' => 'text' ],
                            [ 'key' => 'field_faq_title', 'label' => 'Title',      'name' => 'title',      'type' => 'text' ],
                            [
                                'key'        => 'field_faq_items',
                                'label'      => 'Questions',
                                'name'       => 'items',
                                'type'       => 'repeater',
                                'sub_fields' => [
                                    [ 'key' => 'field_faq_q', 'label' => 'Question', 'name' => 'question', 'type' => 'text' ],
                                    [ 'key' => 'field_faq_a', 'label' => 'Answer',   'name' => 'answer',   'type' => 'wysiwyg', 'toolbar' => 'basic', 'media_upload' => 0 ],
                                ],
                            ],
                        ],
                    ],

                    // ── Testimonials ───────────────────────────────────────
                    'layout_testimonials' => [
                        'key'        => 'layout_testimonials',
                        'name'       => 'block_testimonials',
                        'label'      => 'Testimonials / Quotes',
                        'display'    => 'block',
                        'sub_fields' => [
                            [ 'key' => 'field_tst_bg',    'label' => 'Background', 'name' => 'background', 'type' => 'select', 'choices' => [ 'surface' => 'Surface', 'light' => 'Light', 'dark' => 'Dark Navy' ], 'default_value' => 'surface' ],
                            [ 'key' => 'field_tst_label', 'label' => 'Overline',   'name' => 'label',      'type' => 'text' ],
                            [ 'key' => 'field_tst_title', 'label' => 'Title',      'name' => 'title',      'type' => 'text' ],
                            [
                                'key'        => 'field_tst_items',
                                'label'      => 'Testimonials',
                                'name'       => 'items',
                                'type'       => 'repeater',
                                'sub_fields' => [
                                    [ 'key' => 'field_tst_quote',   'label' => 'Quote',   'name' => 'quote',   'type' => 'textarea', 'rows' => 4 ],
                                    [ 'key' => 'field_tst_author',  'label' => 'Author',  'name' => 'author',  'type' => 'text' ],
                                    [ 'key' => 'field_tst_role',    'label' => 'Role',    'name' => 'role',    'type' => 'text' ],
                                    [ 'key' => 'field_tst_company', 'label' => 'Company', 'name' => 'company', 'type' => 'text' ],
                                    [ 'key' => 'field_tst_image',   'label' => 'Avatar',  'name' => 'image',   'type' => 'image', 'return_format' => 'array' ],
                                    [ 'key' => 'field_tst_logo',    'label' => 'Company Logo', 'name' => 'logo', 'type' => 'image', 'return_format' => 'array' ],
                                ],
                            ],
                        ],
                    ],

                    // ── Downloads ──────────────────────────────────────────
                    'layout_downloads' => [
                        'key'        => 'layout_downloads',
                        'name'       => 'block_downloads',
                        'label'      => 'Downloads / Documents',
                        'display'    => 'block',
                        'sub_fields' => [
                            [ 'key' => 'field_dl_bg',    'label' => 'Background', 'name' => 'background', 'type' => 'select', 'choices' => [ 'light' => 'Light', 'surface' => 'Surface', 'dark' => 'Dark Navy' ], 'default_value' => 'light' ],
                            [ 'key' => 'field_dl_label', 'label' => 'Overline',   'name' => 'label',      'type' => 'text' ],
                            [ 'key' => 'field_dl_title', 'label' => 'Title',      'name' => 'title',      'type' => 'text' ],
                            [
                                'key'        => 'field_dl_items',
                                'label'      => 'Documents',
                                'name'       => 'items',
                                'type'       => 'repeater',
                                'sub_fields' => [
                                    [ 'key' => 'field_dl_dtitle',    'label' => 'Title',       'name' => 'title',       'type' => 'text' ],
                                    [ 'key' => 'field_dl_ddesc',     'label' => 'Description', 'name' => 'description', 'type' => 'text' ],
                                    [ 'key' => 'field_dl_file',      'label' => 'File',        'name' => 'file',        'type' => 'file', 'return_format' => 'array' ],
                                    [ 'key' => 'field_dl_dtype',     'label' => 'Type Label',  'name' => 'type_label',  'type' => 'text', 'default_value' => 'PDF' ],
                                    [ 'key' => 'field_dl_dsize',     'label' => 'File Size',   'name' => 'file_size',   'type' => 'text', 'instructions' => 'e.g. 2.4 MB — leave blank to auto-detect' ],
                                ],
                            ],
                        ],
                    ],

                    // ── Rich Text ──────────────────────────────────────────
                    'layout_rich_text' => [
                        'key'        => 'layout_rich_text',
                        'name'       => 'block_rich_text',
                        'label'      => 'Rich Text / WYSIWYG',
                        'display'    => 'block',
                        'sub_fields' => [
                            [ 'key' => 'field_rt_bg',        'label' => 'Background',  'name' => 'background',  'type' => 'select', 'choices' => [ 'light' => 'Light', 'surface' => 'Surface', 'dark' => 'Dark Navy' ], 'default_value' => 'light' ],
                            [ 'key' => 'field_rt_layout',    'label' => 'Layout',      'name' => 'layout',      'type' => 'select', 'choices' => [ 'full' => 'Full Width', 'side-image' => 'Text + Side Image' ], 'default_value' => 'full' ],
                            [ 'key' => 'field_rt_align',     'label' => 'Text Align',  'name' => 'text_align',  'type' => 'select', 'choices' => [ 'left' => 'Left', 'center' => 'Center' ], 'default_value' => 'left' ],
                            [ 'key' => 'field_rt_content',   'label' => 'Content',     'name' => 'content',     'type' => 'wysiwyg' ],
                            [ 'key' => 'field_rt_side_img',  'label' => 'Side Image',  'name' => 'side_image',  'type' => 'image', 'return_format' => 'array', 'instructions' => 'Only used with "Text + Side Image" layout' ],
                        ],
                    ],

                    // ── Split Banner ───────────────────────────────────────
                    'layout_split_banner' => [
                        'key'        => 'layout_split_banner',
                        'name'       => 'block_split_banner',
                        'label'      => 'Split Banner (50/50)',
                        'display'    => 'block',
                        'sub_fields' => [
                            [ 'key' => 'field_sb_bg',         'label' => 'Background',       'name' => 'background',  'type' => 'select', 'choices' => [ 'light' => 'Light', 'surface' => 'Surface', 'dark' => 'Dark Navy' ], 'default_value' => 'light' ],
                            [ 'key' => 'field_sb_image_side', 'label' => 'Image Position',   'name' => 'image_side',  'type' => 'select', 'choices' => [ 'right' => 'Right', 'left' => 'Left' ], 'default_value' => 'right' ],
                            [ 'key' => 'field_sb_image',      'label' => 'Image',            'name' => 'image',       'type' => 'image', 'return_format' => 'array' ],
                            [ 'key' => 'field_sb_label',      'label' => 'Overline',         'name' => 'label',       'type' => 'text' ],
                            [ 'key' => 'field_sb_title',      'label' => 'Title',            'name' => 'title',       'type' => 'text' ],
                            [ 'key' => 'field_sb_desc',       'label' => 'Description',      'name' => 'description', 'type' => 'textarea', 'rows' => 4 ],
                            [ 'key' => 'field_sb_btn_label',  'label' => 'Primary Button',   'name' => 'btn_label',   'type' => 'text' ],
                            [ 'key' => 'field_sb_btn_url',    'label' => 'Primary URL',      'name' => 'btn_url',     'type' => 'url' ],
                            [ 'key' => 'field_sb_btn2_label', 'label' => 'Secondary Button', 'name' => 'btn2_label',  'type' => 'text' ],
                            [ 'key' => 'field_sb_btn2_url',   'label' => 'Secondary URL',    'name' => 'btn2_url',    'type' => 'url' ],
                        ],
                    ],

                    // ── Icon Grid ──────────────────────────────────────────
                    'layout_icon_grid' => [
                        'key'        => 'layout_icon_grid',
                        'name'       => 'block_icon_grid',
                        'label'      => 'Icon Feature Grid',
                        'display'    => 'block',
                        'sub_fields' => [
                            [ 'key' => 'field_ig_bg',      'label' => 'Background', 'name' => 'background', 'type' => 'select', 'choices' => [ 'surface' => 'Surface', 'light' => 'Light', 'dark' => 'Dark Navy' ], 'default_value' => 'surface' ],
                            [ 'key' => 'field_ig_label',   'label' => 'Overline',   'name' => 'label',      'type' => 'text' ],
                            [ 'key' => 'field_ig_title',   'label' => 'Title',      'name' => 'title',      'type' => 'text' ],
                            [ 'key' => 'field_ig_columns', 'label' => 'Columns',    'name' => 'columns',    'type' => 'select', 'choices' => [ '2' => '2', '3' => '3', '4' => '4' ], 'default_value' => '3' ],
                            [
                                'key'        => 'field_ig_items',
                                'label'      => 'Features',
                                'name'       => 'items',
                                'type'       => 'repeater',
                                'sub_fields' => [
                                    [ 'key' => 'field_ig_icon',     'label' => 'Icon',       'name' => 'icon',     'type' => 'select', 'choices' => blrt_icon_choices() ],
                                    [ 'key' => 'field_ig_ititle',   'label' => 'Title',      'name' => 'title',    'type' => 'text' ],
                                    [ 'key' => 'field_ig_itext',    'label' => 'Text',       'name' => 'text',     'type' => 'textarea', 'rows' => 2 ],
                                    [ 'key' => 'field_ig_ilink',    'label' => 'Link URL',   'name' => 'link_url', 'type' => 'url', 'instructions' => 'Optional — makes the card a link' ],
                                ],
                            ],
                        ],
                    ],
                ],
            ],
        ],
        'location' => [ [ [ 'param' => 'post_type', 'operator' => '==', 'value' => 'page' ] ] ],
        'menu_order' => 0,
        'position'   => 'normal',
        'style'      => 'default',
    ] );

    // ── 5c. Project CPT Fields ────────────────────────────────────────────────

    acf_add_local_field_group( [
        'key'    => 'group_project_fields',
        'title'  => 'Project Details',
        'fields' => [
            [ 'key' => 'field_proj_client',       'label' => 'Client',        'name' => 'client',        'type' => 'text' ],
            [ 'key' => 'field_proj_year',         'label' => 'Year',          'name' => 'year',          'type' => 'number' ],
            [ 'key' => 'field_proj_location',     'label' => 'Location',      'name' => 'location',      'type' => 'text' ],
            [ 'key' => 'field_proj_category',     'label' => 'Category',      'name' => 'category',      'type' => 'text' ],
            [ 'key' => 'field_proj_company_slug', 'label' => 'Company Slug',  'name' => 'company_slug',  'type' => 'text', 'instructions' => 'Must match the company page slug' ],
            [ 'key' => 'field_proj_featured',     'label' => 'Featured',      'name' => 'featured',      'type' => 'true_false', 'default_value' => 0 ],
            [ 'key' => 'field_proj_gallery',      'label' => 'Gallery',       'name' => 'gallery',       'type' => 'gallery', 'return_format' => 'array' ],
            [
                'key'        => 'field_proj_specs',
                'label'      => 'Technical Specs',
                'name'       => 'tech_specs',
                'type'       => 'repeater',
                'sub_fields' => [
                    [ 'key' => 'field_spec_param', 'label' => 'Parameter', 'name' => 'parameter', 'type' => 'text' ],
                    [ 'key' => 'field_spec_value', 'label' => 'Value',     'name' => 'value',     'type' => 'text' ],
                    [ 'key' => 'field_spec_unit',  'label' => 'Unit',      'name' => 'unit',      'type' => 'text' ],
                ],
            ],
        ],
        'location' => [ [ [ 'param' => 'post_type', 'operator' => '==', 'value' => 'project' ] ] ],
    ] );

    // ── 5d. Job CPT Fields ────────────────────────────────────────────────────

    acf_add_local_field_group( [
        'key'    => 'group_job_fields',
        'title'  => 'Job Details',
        'fields' => [
            [ 'key' => 'field_job_company_name', 'label' => 'Company Name', 'name' => 'company_name', 'type' => 'text' ],
            [ 'key' => 'field_job_company_slug', 'label' => 'Company Slug', 'name' => 'company_slug', 'type' => 'text' ],
            [ 'key' => 'field_job_location',     'label' => 'Location',     'name' => 'location',     'type' => 'text' ],
            [ 'key' => 'field_job_type',         'label' => 'Type',         'name' => 'type',         'type' => 'select', 'choices' => [ 'full-time' => 'Full-time', 'part-time' => 'Part-time', 'contract' => 'Contract', 'internship' => 'Internship' ], 'default_value' => 'full-time' ],
            [ 'key' => 'field_job_deadline',     'label' => 'Application Deadline', 'name' => 'deadline',    'type' => 'date_picker', 'display_format' => 'd.m.Y', 'return_format' => 'd.m.Y' ],
            [ 'key' => 'field_job_salary',       'label' => 'Salary Range', 'name' => 'salary_range', 'type' => 'text' ],
            [ 'key' => 'field_job_requirements', 'label' => 'Requirements', 'name' => 'requirements', 'type' => 'wysiwyg', 'toolbar' => 'basic' ],
            [ 'key' => 'field_job_duties',       'label' => 'Duties / Responsibilities', 'name' => 'duties', 'type' => 'wysiwyg', 'toolbar' => 'basic' ],
            [ 'key' => 'field_job_apply_url',    'label' => 'Apply URL',    'name' => 'apply_url',    'type' => 'url', 'instructions' => 'Leave blank to use the built-in application form' ],
        ],
        'location' => [ [ [ 'param' => 'post_type', 'operator' => '==', 'value' => 'job' ] ] ],
    ] );
} );

// ─── 6. AJAX Contact Form Handler ─────────────────────────────────────────────

add_action( 'wp_ajax_blrt_contact',        'blrt_handle_contact_form' );
add_action( 'wp_ajax_nopriv_blrt_contact', 'blrt_handle_contact_form' );

function blrt_handle_contact_form() {
    check_ajax_referer( 'blrt_contact', 'nonce' );

    $to      = sanitize_email( $_POST['to_email'] ?? get_option( 'admin_email' ) );
    $name    = sanitize_text_field( $_POST['firstName'] ?? '' ) . ' ' . sanitize_text_field( $_POST['lastName'] ?? '' );
    $email   = sanitize_email( $_POST['email'] ?? '' );
    $phone   = sanitize_text_field( $_POST['phone'] ?? '' );
    $company = sanitize_text_field( $_POST['company'] ?? '' );
    $details = sanitize_textarea_field( $_POST['details'] ?? '' );

    if ( ! $email || ! $name ) {
        wp_send_json_error( [ 'message' => 'Required fields missing.' ] );
    }

    $subject = sprintf( 'New contact request from %s', $name );
    $body    = "Name: {$name}\nEmail: {$email}\nPhone: {$phone}\nCompany: {$company}\n\nMessage:\n{$details}";
    $headers = [ "Reply-To: {$name} <{$email}>", 'Content-Type: text/plain; charset=UTF-8' ];

    $sent = wp_mail( $to, $subject, $body, $headers );
    if ( $sent ) {
        wp_send_json_success( [ 'message' => 'Message sent.' ] );
    } else {
        wp_send_json_error( [ 'message' => 'Could not send email. Please try again.' ] );
    }
}

// ─── 7. WPML Compatibility ────────────────────────────────────────────────────

add_action( 'init', function () {
    // Register theme strings for WPML String Translation
    if ( function_exists( 'icl_register_string' ) ) {
        $strings = [
            'blrt_nav_home'     => 'Home',
            'blrt_nav_about'    => 'About',
            'blrt_nav_projects' => 'Projects',
            'blrt_nav_news'     => 'News',
            'blrt_nav_careers'  => 'Careers',
            'blrt_nav_contacts' => 'Contact',
            'blrt_cta_contact'  => 'Contact Us',
            'blrt_footer_copy'  => '© BLRT Grupp. All rights reserved.',
        ];
        foreach ( $strings as $key => $value ) {
            icl_register_string( 'blrt', $key, $value );
        }
    }
} );

// Language switcher helper for header.php
function blrt_language_switcher(): string {
    if ( ! function_exists( 'icl_get_languages' ) ) return '';
    $languages = icl_get_languages( 'skip_missing=0&orderby=code' );
    if ( empty( $languages ) ) return '';

    $out = '<ul class="lang-switcher">';
    foreach ( $languages as $lang ) {
        $active = $lang['active'] ? ' class="active"' : '';
        $out   .= sprintf(
            '<li%s><a href="%s">%s</a></li>',
            $active,
            esc_url( $lang['url'] ),
            esc_html( strtoupper( $lang['language_code'] ) )
        );
    }
    $out .= '</ul>';
    return $out;
}

// ─── 0. ACF Fallback Helpers ──────────────────────────────────────────────────
//
// Allow every template to render with or without ACF PRO installed.
// blrt_option() / blrt_field() replace bare get_field() calls throughout.
// blrt_defaults() holds the hardcoded content drawn from the React prototype.

function blrt_defaults(): array {
    static $d = null;
    if ( $d !== null ) return $d;
    $d = [
        'company_name'   => 'BLRT Grupp',
        'footer_tagline' => 'One industrial group. Twenty-four companies. A century of Baltic maritime and engineering tradition.',
        'footer_email'   => 'info@blrt.ee',
        'footer_phone'   => '+372 610 2997',
        'footer_address' => 'Kopli 103, 11712 Tallinn, Estonia',
        'reg_code'       => '10910683',
        'logo'           => null,
        'logo_dark'      => null,
        'social_links'   => [],
        'sectors'        => [
            [
                'sector_id'    => 'ship-repair',
                'sector_label' => 'Ship Repair',
                'companies'    => [
                    [ 'name' => 'Tallinn Shipyard',     'url' => '/company/tallinn-shipyard',     'countries' => 'EE', 'tagline' => '' ],
                    [ 'name' => 'Western Shiprepair',   'url' => '/company/western-shiprepair',   'countries' => 'LT', 'tagline' => '' ],
                    [ 'name' => 'Turku Repair Yard',    'url' => '/company/turku-repair-yard',    'countries' => 'FI', 'tagline' => '' ],
                    [ 'name' => 'BLRT Rekato',          'url' => '/company/blrt-rekato',          'countries' => 'EE', 'tagline' => '' ],
                ],
            ],
            [
                'sector_id'    => 'shipbuilding',
                'sector_label' => 'Shipbuilding',
                'companies'    => [
                    [ 'name' => 'Western Baltic Shipbuilding', 'url' => '/company/western-baltic-shipbuilding', 'countries' => 'LT', 'tagline' => '' ],
                ],
            ],
            [
                'sector_id'    => 'inspection',
                'sector_label' => 'Inspection & Testing',
                'companies'    => [
                    [ 'name' => 'Tehnomet Survey',            'url' => '/company/tehnomet-survey',            'countries' => 'EE', 'tagline' => '' ],
                    [ 'name' => 'Western Central Laboratory', 'url' => '/company/western-central-laboratory', 'countries' => 'LT', 'tagline' => '' ],
                    [ 'name' => 'Elme TKS',                  'url' => '/company/elme-tks',                   'countries' => 'EE', 'tagline' => '' ],
                ],
            ],
            [
                'sector_id'    => 'engineering',
                'sector_label' => 'Engineering',
                'companies'    => [
                    [ 'name' => 'BLRT ERA',                   'url' => '/company/blrt-era',                   'countries' => 'EE', 'tagline' => '' ],
                    [ 'name' => 'Bars Elekter',               'url' => '/company/bars-elekter',               'countries' => 'EE', 'tagline' => '' ],
                    [ 'name' => 'BLRT Masinaehitus',          'url' => '/company/blrt-masinaehitus',          'countries' => 'EE', 'tagline' => '' ],
                    [ 'name' => 'Marketex Marine',            'url' => '/company/marketex-marine',            'countries' => 'EE', 'tagline' => '' ],
                    [ 'name' => 'Marketex Offshore',          'url' => '/company/marketex-offshore',          'countries' => 'EE', 'tagline' => '' ],
                    [ 'name' => 'BLRT Valukoda',              'url' => '/company/blrt-valukoda',              'countries' => 'EE', 'tagline' => '' ],
                    [ 'name' => 'MOC',                        'url' => '/company/moc',                        'countries' => 'EE', 'tagline' => '' ],
                    [ 'name' => 'Western Tech Solutions',     'url' => '/company/western-tech-solutions',     'countries' => 'LT', 'tagline' => '' ],
                    [ 'name' => 'Western Baltic Engineering', 'url' => '/company/western-baltic-engineering', 'countries' => 'LT', 'tagline' => '' ],
                ],
            ],
            [
                'sector_id'    => 'steel-materials',
                'sector_label' => 'Steel & Materials',
                'companies'    => [
                    [ 'name' => 'Elme Metall',      'url' => '/company/elme-metall',      'countries' => 'EE', 'tagline' => '' ],
                    [ 'name' => 'Elme Messer Gaas', 'url' => '/company/elme-messer-gaas', 'countries' => 'EE', 'tagline' => '' ],
                    [ 'name' => 'Elme Trans',       'url' => '/company/elme-trans',       'countries' => 'EE', 'tagline' => '' ],
                    [ 'name' => 'Elme',             'url' => '/company/elme',             'countries' => 'EE', 'tagline' => '' ],
                ],
            ],
            [
                'sector_id'    => 'port-marine',
                'sector_label' => 'Port & Marine Services',
                'companies'    => [
                    [ 'name' => 'Vene-Balti Sadam',    'url' => '/company/vene-balti-sadam',     'countries' => 'EE', 'tagline' => '' ],
                    [ 'name' => 'Mereabi',             'url' => '/company/mereabi',              'countries' => 'EE', 'tagline' => '' ],
                    [ 'name' => 'Western Ships Agency', 'url' => '/company/western-ships-agency', 'countries' => 'LT', 'tagline' => '' ],
                ],
            ],
        ],
    ];
    return $d;
}

/**
 * Read an ACF options-page field; fall back to blrt_defaults() when ACF is absent.
 *
 * @param string $key              ACF field name (must match blrt_defaults() key for auto-fallback)
 * @param mixed  $override_default Explicit fallback; takes precedence over blrt_defaults()
 */
function blrt_option( string $key, $override_default = null ) {
    if ( function_exists( 'get_field' ) ) {
        $val = get_field( $key, 'option' );
        if ( $val !== null && $val !== false && $val !== '' ) return $val;
    }
    if ( $override_default !== null ) return $override_default;
    $d = blrt_defaults();
    return $d[ $key ] ?? '';
}

/**
 * Read an ACF post field; fall back to $default when ACF is absent or field is empty.
 *
 * @param string     $key     ACF field name
 * @param int|string $post_id WP post ID
 * @param mixed      $default Fallback value
 */
function blrt_field( string $key, $post_id, $default = '' ) {
    if ( function_exists( 'get_field' ) ) {
        $val = get_field( $key, $post_id );
        if ( $val !== null && $val !== false && $val !== '' ) return $val;
    }
    return $default;
}

// ─── 8. Helper Functions ──────────────────────────────────────────────────────

// Returns SVG icon markup for a given icon name
function blrt_icon( string $name, string $class = 'icon' ): string {
    $icons = [
        'anchor'   => '<path d="M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.58-3.25 3.93L12 22l-1-1v-1l1-1v-2h-2v-1.07A4 4 0 0 1 8 6a4 4 0 0 1 4-4zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>',
        'ship'     => '<path d="M2 20h20M5 20V10l7-7 7 7v10M9 20v-6h6v6"/>',
        'wrench'   => '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
        'zap'      => '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
        'shield'   => '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
        'package'  => '<path d="M16.5 9.4l-9-5.19M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.29 7 12 12 20.71 7"/><line x1="12" y1="22" x2="12" y2="12"/>',
        'truck'    => '<rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>',
        'layers'   => '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',
        'eye'      => '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',
        'globe'    => '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
        'award'    => '<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>',
        'clock'    => '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
        'waves'    => '<path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>',
        'circuit'  => '<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>',
        'file'     => '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>',
        'droplets' => '<path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"/><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"/>',
        'magnet'   => '<path d="M6 15A6 6 0 0 0 6 3H3v12h3z"/><path d="M18 15A6 6 0 0 1 18 3h3v12h-3z"/><line x1="9" y1="21" x2="9" y2="18"/><line x1="15" y1="21" x2="15" y2="18"/><line x1="9" y1="18" x2="15" y2="18"/>',
        'trending' => '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>',
        'building' => '<rect x="4" y="2" width="16" height="20"/><rect x="9" y="7" width="3" height="3"/><rect x="12" y="7" width="3" height="3"/><rect x="9" y="11" width="3" height="3"/><rect x="12" y="11" width="3" height="3"/><rect x="9" y="15" width="3" height="3"/><rect x="12" y="15" width="3" height="3"/>',
        'gauge'    => '<path d="M12 2a10 10 0 1 0 10 10"/><path d="M12 12 L18.5 5.5"/>',
        'beaker'   => '<path d="M9 3h6l-1 9H10L9 3z"/><path d="M5 21h14L15 12H9L5 21z"/>',
        'hard-hat' => '<path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z"/><path d="M10 10V5a2 2 0 0 1 4 0v5"/><path d="M5 13V9a7 7 0 0 1 14 0v4"/>',
        'flame'    => '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',
        'ruler'    => '<path d="M3 10h18M3 14h18M10 3v18M14 3v18"/>',
        'mail'     => '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>',
        'phone'    => '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.3a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.77 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
        'map-pin'  => '<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>',
        'arrow-right' => '<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>',
        'external-link' => '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 0 1 0h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>',
        'check-circle' => '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>',
        'play'         => '<polygon points="5 3 19 12 5 21 5 3"/>',
        'x'            => '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
        'menu'         => '<line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>',
        'chevron-down' => '<polyline points="6 9 12 15 18 9"/>',
        'user'         => '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
        'linkedin'     => '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
        'download'     => '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
        'leaf'         => '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>',
        'heart'        => '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>',
        'users'        => '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
        'star'         => '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
        'share'        => '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>',
        'info'         => '<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>',
        'calendar'     => '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
        'search'       => '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
    ];

    $path = $icons[ $name ] ?? $icons['file'];
    return sprintf(
        '<svg class="%s" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">%s</svg>',
        esc_attr( $class ),
        $path
    );
}

// Returns icon choices array for ACF select fields
function blrt_icon_choices(): array {
    return [
        'anchor'   => 'Anchor',
        'ship'     => 'Ship',
        'wrench'   => 'Wrench',
        'zap'      => 'Zap / Lightning',
        'shield'   => 'Shield',
        'package'  => 'Package / Box',
        'truck'    => 'Truck / Transport',
        'layers'   => 'Layers',
        'ruler'    => 'Ruler',
        'eye'      => 'Eye / Inspection',
        'globe'    => 'Globe',
        'award'    => 'Award / Certificate',
        'clock'    => 'Clock',
        'waves'    => 'Waves',
        'circuit'  => 'Circuit / Electronics',
        'file'     => 'File / Document',
        'droplets' => 'Droplets / Gas',
        'magnet'   => 'Magnet',
        'trending' => 'Trending',
        'building' => 'Building',
        'gauge'    => 'Gauge',
        'beaker'   => 'Beaker / Laboratory',
        'hard-hat'  => 'Hard Hat / Construction',
        'flame'     => 'Flame / Energy',
        'leaf'      => 'Leaf / Environment',
        'heart'     => 'Heart / Community',
        'users'     => 'Users / People',
        'user'      => 'User / Person',
        'star'      => 'Star / Quality',
        'share'     => 'Share / Network',
        'info'      => 'Info',
        'calendar'  => 'Calendar',
        'search'    => 'Search / Inspection',
        'download'  => 'Download',
        'mail'      => 'Mail / Email',
        'phone'     => 'Phone',
        'map-pin'   => 'Location / Map Pin',
        'check-circle' => 'Check / Verified',
    ];
}

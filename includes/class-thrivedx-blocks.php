<?php
class ThriveDX_Blocks {
    /**
     * Initializes the block's functionality by setting up hooks.
     */
    public static function init() {
        add_action('init', array(__CLASS__, 'register_blocks'));
        add_action('enqueue_block_editor_assets', array(__CLASS__, 'enqueue_editor_assets'));
		add_action('wp_enqueue_scripts', array(__CLASS__, 'enqueue_front_end_styles'));
    }

    /**
     * Registers custom blocks.
     */
    public static function register_blocks() {
        // Block registration logic goes here
        register_block_type('thrivedx-test-plugin/custom-fields-block', array(
            'editor_script' => 'thrivedx-custom-block',
            'attributes' => array(
                'customText' => array(
                    'type' => 'string',
                    'default' => '',
                ),
                'customDate' => array(
                    'type' => 'string', // Dates are stored as strings
                    'default' => '',
                ),
                'customImage' => array(
                    'type' => 'string',
                    'default' => '',
                ),
            ),
        ));
    }

    /**
     * Enqueues scripts and styles for the block editor.
     */
    public static function enqueue_editor_assets() {
        // Enqueue block script
        wp_enqueue_script(
            'thrivedx-custom-block',
            THRIVEDX_PLUGIN_URL . '/assets/js/block.js',
            array('wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor'),
            filemtime(THRIVEDX_PLUGIN_URL . 'assets/js/block.js')
        );

        // Enqueue block editor style
        wp_enqueue_style(
            'thrivedx-custom-block-editor-style',
            THRIVEDX_PLUGIN_URL . '/assets/css/block-editor.css',
            array(),
            filemtime(THRIVEDX_PLUGIN_URL .  'assets/css/block-editor.css')
        );
    }

	/**
     * Enqueues styles for the front end.
     */
	public static function enqueue_front_end_styles() {
        wp_enqueue_style(
            'thrivedx-front-end-styles',
            THRIVEDX_PLUGIN_URL . '/assets/css/block-editor.css',
            array(),
            filemtime(THRIVEDX_PLUGIN_URL . 'assets/css/block-editor.css')
        );
    }
}

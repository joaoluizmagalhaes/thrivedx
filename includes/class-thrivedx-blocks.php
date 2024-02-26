<?php
class ThriveDX_Blocks {
    /**
     * Initializes the block's functionality by setting up hooks.
     */
    public static function init() {
        add_action('init', array(__CLASS__, 'register_blocks'));
        add_action('enqueue_block_editor_assets', array(__CLASS__, 'enqueue_editor_assets'));
    }

    /**
     * Registers custom blocks.
     */
    public static function register_blocks() {
        // Block registration logic goes here.
        register_block_type('thrivedx-test-plugin/custom-fields-block', array(
            'editor_script' => 'thrivedx-custom-block',
        ));
    }

    /**
     * Enqueues scripts and styles for the block editor.
     */
    public static function enqueue_editor_assets() {
        // Enqueue block script
        wp_enqueue_script(
            'thrivedx-custom-block',
            plugins_url('../assets/js/block.js', __FILE__),
            array('wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor'),
            filemtime(plugin_dir_path(__DIR__) . 'assets/js/block.js')
        );

        // Optionally enqueue block editor style
        wp_enqueue_style(
            'thrivedx-custom-block-editor-style',
            plugins_url('../assets/css/editor.css', __FILE__),
            array(),
            filemtime(plugin_dir_path(__DIR__) . 'assets/css/editor.css')
        );
    }
}

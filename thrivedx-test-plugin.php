<?php
/**
 * Plugin Name: ThriveDX Test Plugin
 * Description: This plugin is an assessment for ThriveDX Senior WP developer position. Adds custom text, date, and image fields to posts and displays them on the front end.
 * Version: 1.0
 * Author: Joao Magalhaes
 * License: GPL2
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: thrivedx-test-plugin
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

add_action('enqueue_block_editor_assets', 'thrivedx_block_editor_assets');
function thrivedx_block_editor_assets() {
    // Enqueue block script
    wp_enqueue_script(
        'thrivedx-custom-block',
        plugins_url('block.js', __FILE__),
        array('wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor'),
        filemtime(plugin_dir_path(__FILE__) . 'block.js')
    );

    // Optionally enqueue block editor style
    wp_enqueue_style(
        'thrivedx-custom-block-editor-style',
        plugins_url('editor.css', __FILE__),
        array(),
        filemtime(plugin_dir_path(__FILE__) . 'editor.css')
    );
}

add_action('init', 'thrivedx_register_block');
function thrivedx_register_block() {
    register_block_type('thrivedx-test-plugin/custom-fields-block', array(
        'editor_script' => 'thrivedx-custom-block', // Handle of the block's script.
        'editor_style'  => 'thrivedx-custom-block-editor-style', // Handle of the block's editor style (optional).
    ));
}

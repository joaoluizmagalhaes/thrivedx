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
    exit;
}

// Define plugin version.
define('THRIVEDX_TEST_PLUGIN_VERSION', '1.0');

// Include the blocks class.
require_once __DIR__ . '/includes/class-thrivedx-blocks.php';

// Initialize the plugin.
ThriveDX_Blocks::init();


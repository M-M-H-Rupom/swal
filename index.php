<?php
/**
 * Plugin Name: Swal2 
 * Description: hello
 * Version: 1.0
 * Author: Rupom
 * Text Domain: 
 * 
 */

define('DSC_DEBUG',true);
define('DSC_VERSION', '1.0.0');
function demo_enqueue_callback(){
    $version = DSC_DEBUG ? time() : DSC_VERSION ;
    wp_enqueue_style( 'demo-css', plugin_dir_url( __FILE__ ).'style.css');
    wp_enqueue_script( 'main-js', plugin_dir_url( __FILE__ ). 'main.js', array('jquery'), $version, true );
    wp_enqueue_script( 'swal2-js', plugin_dir_url( __FILE__ ). 'swal2.js', array('jquery'), $version, true );
    wp_enqueue_script( 'loading-js', plugin_dir_url( __FILE__ ). 'loading.js', array('jquery'), $version, true );
    wp_localize_script( 'main-js', 'localize_data', [
        'ajaxurl' => admin_url('admin-ajax.php'),
        'nonce' =>  wp_create_nonce( 'data_nonce' ),
    ] );
   
}
add_action( 'wp_enqueue_scripts', 'demo_enqueue_callback');
function demo_callback($atts){
    $a = shortcode_atts( [
        'id' => 1,
        'name' => 'test'
    ], $atts );
    ob_start();
    ?>
    <div class="btn">
        <div class="loading1 load">loading show</div>
        <div class="loading2 load">loading hide</div>
        <div class="loading3 load">Show data</div>
        <div class="loading3 load">Save data</div>
        <div class="item bt1">1</div>
        <div class="item bt2">2</div>
        <div class="item bt3">3</div>
        <div class="item bt4">4</div>
        <div class="item bt5">5</div>
        <div class="item bt6">6</div>
        <div class="item bt7">7</div>
        <div class="item bt8">8</div>
        <div class="item bt9">9</div>
        <div class="item bt10">10</div>
        <div class="item bt11">11</div>
        <div class="item bt12">12</div>
        <input type="text" name="" id="test_field">
    </div>
    <?php
    return ob_get_clean();
}
add_shortcode( 'demo', 'demo_callback' );
<?
define("VERSION", "0.1.{REV}");
define('ENV', 'DEVELOPMENT');

function strleft($s1, $s2) { return substr($s1, 0, strpos($s1, $s2)); }
function selfURL() {
    if (!isset($_SERVER['REQUEST_URI'])) {
        $serverrequri = $_SERVER['PHP_SELF'];
    } else {
        $serverrequri = $_SERVER['REQUEST_URI'];
    }
    $s = empty($_SERVER["HTTPS"]) ? '' : ($_SERVER["HTTPS"] == "on") ? "s" : "";
    $protocol = strleft(strtolower($_SERVER["SERVER_PROTOCOL"]), "/").$s;
    //$port = ($_SERVER["SERVER_PORT"] == "80") ? "" : (":".$_SERVER["SERVER_PORT"]);
    $port="";
    return $protocol."://".$_SERVER['HTTP_HOST'].$port.$serverrequri;
}

function __autoload($class_name) {

    # If file name contains underscore convert them to folder marks
    if (strpos($class_name, '_') !== false) {
        $className = str_replace("_", "/", $class_name);
    } else {
        $className = $class_name;
    }

    # This where we usually contain all our classes
    $path = dirname(__FILE__)."/classes/" . $className . '.php';
    
    # echo $path;
    # Check the obvious place first
    if (file_exists($path)) {
        require_once $path;
        return true;
        # file included no need to go forward
    }
    return false;
}

define("URL", selfURL());
define("FOLDER", str_replace($_SERVER['DOCUMENT_ROOT'], "", str_replace("/lib", "/", str_replace("\\", "/", dirname(__FILE__)))));

$r = "/(\b".str_replace("/", "\\/?", preg_quote(FOLDER))."\b).*?$/i";
define("HTTP_URL", preg_replace("/\/$/", "", preg_replace($r, "$1", URL))."/");
date_default_timezone_set(@date_default_timezone_get());
?>
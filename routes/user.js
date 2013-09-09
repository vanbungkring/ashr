
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.send("respond with a resource");
};

exports.download = function(req, res){
  res.writeHead(200, {"Content-Type": "application/json"});
  var otherArray = ["item1", "item2"];
  var otherObject = { file: "nodejs.drm", url: "/data/download/drm/nodejs.drm",drm : true };
  res.write(
    JSON.stringify({ 
      fileDownload: otherObject, 
      valid: new Date(),
    })
  );
  res.end();
};
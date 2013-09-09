
/*
 * GET users listing.
 */

 exports.list = function(req, res){
 	res.send("respond with a resource");
 };

 exports.download = function(req, res){
 	console.log(req.query.id);
 	res.writeHead(200, {"Content-Type": "application/json"});
 	var otherObject = { 
 		file: "344-221.drm",
 		title: 'A.G.N.E.Z',
 		url: "/drm/344-221.drm",
 		drm : true,
 		type : 'DRM',
 		valid: new Date() 
 	};
 	res.write(
 		JSON.stringify({
 				details: otherObject
 				
 		})
 		);
 	res.end();
 };
export const indexTemplate = (content) => `
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Reddit</title>
	<script src="/static/client.js" type="application/javascript" defer></script>
</head>
<body>
	<div id="react_root">${content}</div>
</body>
</html>
`;


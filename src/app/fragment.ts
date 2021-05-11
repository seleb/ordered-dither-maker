export const fragment = `
precision mediump float;
uniform sampler2D texPreview;
uniform sampler2D texDither;
uniform vec2 resolution;
uniform vec2 ditherSize;
uniform float scale;
uniform float posterize;
uniform float grayscale;
uniform float contrast;
uniform float brightness;
void main() {
	vec2 coord = gl_FragCoord.xy;
	coord -= mod(coord, scale);
	vec2 uvDither = fract((coord + vec2(0.5)) / (ditherSize.xy * scale));
	vec2 uvPreview = coord.xy / resolution;
	vec3 col = (texture2D(texPreview, uvPreview).rgb - 0.5 + (brightness - 1.0)) * contrast + 0.5;
	vec3 limit = texture2D(texDither, uvDither).rgb;

	// posterization
	vec3 raw = grayscale < 0.5 ? col : vec3(dot(col.rgb, vec3(0.299, 0.587, 0.114)));
	vec3 posterized = raw - mod(raw, 1.0/posterize);

	// dithering
	vec3 dither = step(limit, (raw-posterized)*posterize)/posterize;

	// output
	gl_FragColor = vec4(posterized + dither, 1.0);
}
`;

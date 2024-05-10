const fragmentShader = `
  precision mediump float;
  uniform sampler2D texture;
  varying vec2 vUv;
  uniform float time;

  void main() {
    vec2 center = vUv - vec2(0.5);
    float dist = length(center);
    float border = smoothstep(0.45, 0.5, dist);
    
    vec2 distortedUv = vUv + center * pow(dist, 2.0) * 0.5;

    // vec4 color = texture2D(texture, distortedUv); will be used later once texture is applied ------------
    vec3 color = vec3(0.0, 1.0, 0.0); // simple green color (testing purposes)

    // gl_FragColor = mix(color, vec4(0.0), border); again, for when texture is applied
    gl_FragColor = mix(vec4(color, 1.0), vec4(0.0), border); //for simple green color 
  }
`;

export default fragmentShader;

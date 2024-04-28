
uniform vec2 uFrequency;
uniform float uTime;

void main()

{
   

    vec4 modelPosition= modelMatrix * vec4(position,1.0);

    modelPosition.z+=sin(modelPosition.x*uFrequency.x - uTime * 3.0 )*0.1;
    modelPosition.y+=sin(modelPosition.y*uFrequency.y*1.0 - uTime * 2.0 )*0.03;
    modelPosition.x+=sin(modelPosition.y*uFrequency.y*1.0 - uTime * 2.0 )*0.03;


    vec4 viewPosition= viewMatrix * modelPosition;
    vec4 projectedPosition= projectionMatrix * viewPosition;

        gl_Position=projectedPosition;
       

}
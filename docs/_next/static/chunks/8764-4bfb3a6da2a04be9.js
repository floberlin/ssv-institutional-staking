(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8764],{79742:function(__unused_webpack_module,exports){"use strict";exports.byteLength=function(b64){var lens=getLens(b64),validLen=lens[0],placeHoldersLen=lens[1];return(validLen+placeHoldersLen)*3/4-placeHoldersLen},exports.toByteArray=function(b64){var tmp,i,lens=getLens(b64),validLen=lens[0],placeHoldersLen=lens[1],arr=new Arr((validLen+placeHoldersLen)*3/4-placeHoldersLen),curByte=0,len=placeHoldersLen>0?validLen-4:validLen;for(i=0;i<len;i+=4)tmp=revLookup[b64.charCodeAt(i)]<<18|revLookup[b64.charCodeAt(i+1)]<<12|revLookup[b64.charCodeAt(i+2)]<<6|revLookup[b64.charCodeAt(i+3)],arr[curByte++]=tmp>>16&255,arr[curByte++]=tmp>>8&255,arr[curByte++]=255&tmp;return 2===placeHoldersLen&&(tmp=revLookup[b64.charCodeAt(i)]<<2|revLookup[b64.charCodeAt(i+1)]>>4,arr[curByte++]=255&tmp),1===placeHoldersLen&&(tmp=revLookup[b64.charCodeAt(i)]<<10|revLookup[b64.charCodeAt(i+1)]<<4|revLookup[b64.charCodeAt(i+2)]>>2,arr[curByte++]=tmp>>8&255,arr[curByte++]=255&tmp),arr},exports.fromByteArray=function(uint8){for(var tmp,len=uint8.length,extraBytes=len%3,parts=[],i=0,len2=len-extraBytes;i<len2;i+=16383)parts.push(function(uint8,start,end){for(var tmp,output=[],i=start;i<end;i+=3)output.push(lookup[(tmp=(uint8[i]<<16&16711680)+(uint8[i+1]<<8&65280)+(255&uint8[i+2]))>>18&63]+lookup[tmp>>12&63]+lookup[tmp>>6&63]+lookup[63&tmp]);return output.join("")}(uint8,i,i+16383>len2?len2:i+16383));return 1===extraBytes?parts.push(lookup[(tmp=uint8[len-1])>>2]+lookup[tmp<<4&63]+"=="):2===extraBytes&&parts.push(lookup[(tmp=(uint8[len-2]<<8)+uint8[len-1])>>10]+lookup[tmp>>4&63]+lookup[tmp<<2&63]+"="),parts.join("")};for(var lookup=[],revLookup=[],Arr="undefined"!=typeof Uint8Array?Uint8Array:Array,code="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",i=0,len=code.length;i<len;++i)lookup[i]=code[i],revLookup[code.charCodeAt(i)]=i;function getLens(b64){var len=b64.length;if(len%4>0)throw Error("Invalid string. Length must be a multiple of 4");var validLen=b64.indexOf("=");-1===validLen&&(validLen=len);var placeHoldersLen=validLen===len?0:4-validLen%4;return[validLen,placeHoldersLen]}revLookup["-".charCodeAt(0)]=62,revLookup["_".charCodeAt(0)]=63},48764:function(__unused_webpack_module,exports,__webpack_require__){"use strict";/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ let base64=__webpack_require__(79742),ieee754=__webpack_require__(80645),customInspectSymbol="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;function createBuffer(length){if(length>2147483647)throw RangeError('The value "'+length+'" is invalid for option "size"');let buf=new Uint8Array(length);return Object.setPrototypeOf(buf,Buffer.prototype),buf}function Buffer(arg,encodingOrOffset,length){if("number"==typeof arg){if("string"==typeof encodingOrOffset)throw TypeError('The "string" argument must be of type string. Received type number');return allocUnsafe(arg)}return from(arg,encodingOrOffset,length)}function from(value,encodingOrOffset,length){if("string"==typeof value)return function(string,encoding){if(("string"!=typeof encoding||""===encoding)&&(encoding="utf8"),!Buffer.isEncoding(encoding))throw TypeError("Unknown encoding: "+encoding);let length=0|byteLength(string,encoding),buf=createBuffer(length),actual=buf.write(string,encoding);return actual!==length&&(buf=buf.slice(0,actual)),buf}(value,encodingOrOffset);if(ArrayBuffer.isView(value))return function(arrayView){if(isInstance(arrayView,Uint8Array)){let copy=new Uint8Array(arrayView);return fromArrayBuffer(copy.buffer,copy.byteOffset,copy.byteLength)}return fromArrayLike(arrayView)}(value);if(null==value)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof value);if(isInstance(value,ArrayBuffer)||value&&isInstance(value.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(isInstance(value,SharedArrayBuffer)||value&&isInstance(value.buffer,SharedArrayBuffer)))return fromArrayBuffer(value,encodingOrOffset,length);if("number"==typeof value)throw TypeError('The "value" argument must not be of type number. Received type number');let valueOf=value.valueOf&&value.valueOf();if(null!=valueOf&&valueOf!==value)return Buffer.from(valueOf,encodingOrOffset,length);let b=function(obj){var obj1;if(Buffer.isBuffer(obj)){let len=0|checked(obj.length),buf=createBuffer(len);return 0===buf.length||obj.copy(buf,0,0,len),buf}return void 0!==obj.length?"number"!=typeof obj.length||(obj1=obj.length)!=obj1?createBuffer(0):fromArrayLike(obj):"Buffer"===obj.type&&Array.isArray(obj.data)?fromArrayLike(obj.data):void 0}(value);if(b)return b;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof value[Symbol.toPrimitive])return Buffer.from(value[Symbol.toPrimitive]("string"),encodingOrOffset,length);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof value)}function assertSize(size){if("number"!=typeof size)throw TypeError('"size" argument must be of type number');if(size<0)throw RangeError('The value "'+size+'" is invalid for option "size"')}function allocUnsafe(size){return assertSize(size),createBuffer(size<0?0:0|checked(size))}function fromArrayLike(array){let length=array.length<0?0:0|checked(array.length),buf=createBuffer(length);for(let i=0;i<length;i+=1)buf[i]=255&array[i];return buf}function fromArrayBuffer(array,byteOffset,length){let buf;if(byteOffset<0||array.byteLength<byteOffset)throw RangeError('"offset" is outside of buffer bounds');if(array.byteLength<byteOffset+(length||0))throw RangeError('"length" is outside of buffer bounds');return Object.setPrototypeOf(buf=void 0===byteOffset&&void 0===length?new Uint8Array(array):void 0===length?new Uint8Array(array,byteOffset):new Uint8Array(array,byteOffset,length),Buffer.prototype),buf}function checked(length){if(length>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|length}function byteLength(string,encoding){if(Buffer.isBuffer(string))return string.length;if(ArrayBuffer.isView(string)||isInstance(string,ArrayBuffer))return string.byteLength;if("string"!=typeof string)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof string);let len=string.length,mustMatch=arguments.length>2&&!0===arguments[2];if(!mustMatch&&0===len)return 0;let loweredCase=!1;for(;;)switch(encoding){case"ascii":case"latin1":case"binary":return len;case"utf8":case"utf-8":return utf8ToBytes(string).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*len;case"hex":return len>>>1;case"base64":return base64ToBytes(string).length;default:if(loweredCase)return mustMatch?-1:utf8ToBytes(string).length;encoding=(""+encoding).toLowerCase(),loweredCase=!0}}function slowToString(encoding,start,end){let loweredCase=!1;if((void 0===start||start<0)&&(start=0),start>this.length||((void 0===end||end>this.length)&&(end=this.length),end<=0||(end>>>=0)<=(start>>>=0)))return"";for(encoding||(encoding="utf8");;)switch(encoding){case"hex":return function(buf,start,end){let len=buf.length;(!start||start<0)&&(start=0),(!end||end<0||end>len)&&(end=len);let out="";for(let i=start;i<end;++i)out+=hexSliceLookupTable[buf[i]];return out}(this,start,end);case"utf8":case"utf-8":return utf8Slice(this,start,end);case"ascii":return function(buf,start,end){let ret="";end=Math.min(buf.length,end);for(let i=start;i<end;++i)ret+=String.fromCharCode(127&buf[i]);return ret}(this,start,end);case"latin1":case"binary":return function(buf,start,end){let ret="";end=Math.min(buf.length,end);for(let i=start;i<end;++i)ret+=String.fromCharCode(buf[i]);return ret}(this,start,end);case"base64":var start1,end1;return start1=start,end1=end,0===start1&&end1===this.length?base64.fromByteArray(this):base64.fromByteArray(this.slice(start1,end1));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(buf,start,end){let bytes=buf.slice(start,end),res="";for(let i=0;i<bytes.length-1;i+=2)res+=String.fromCharCode(bytes[i]+256*bytes[i+1]);return res}(this,start,end);default:if(loweredCase)throw TypeError("Unknown encoding: "+encoding);encoding=(encoding+"").toLowerCase(),loweredCase=!0}}function swap(b,n,m){let i=b[n];b[n]=b[m],b[m]=i}function bidirectionalIndexOf(buffer,val,byteOffset,encoding,dir){var obj;if(0===buffer.length)return -1;if("string"==typeof byteOffset?(encoding=byteOffset,byteOffset=0):byteOffset>2147483647?byteOffset=2147483647:byteOffset<-2147483648&&(byteOffset=-2147483648),(obj=byteOffset=+byteOffset)!=obj&&(byteOffset=dir?0:buffer.length-1),byteOffset<0&&(byteOffset=buffer.length+byteOffset),byteOffset>=buffer.length){if(dir)return -1;byteOffset=buffer.length-1}else if(byteOffset<0){if(!dir)return -1;byteOffset=0}if("string"==typeof val&&(val=Buffer.from(val,encoding)),Buffer.isBuffer(val))return 0===val.length?-1:arrayIndexOf(buffer,val,byteOffset,encoding,dir);if("number"==typeof val)return(val&=255,"function"==typeof Uint8Array.prototype.indexOf)?dir?Uint8Array.prototype.indexOf.call(buffer,val,byteOffset):Uint8Array.prototype.lastIndexOf.call(buffer,val,byteOffset):arrayIndexOf(buffer,[val],byteOffset,encoding,dir);throw TypeError("val must be string, number or Buffer")}function arrayIndexOf(arr,val,byteOffset,encoding,dir){let i,indexSize=1,arrLength=arr.length,valLength=val.length;if(void 0!==encoding&&("ucs2"===(encoding=String(encoding).toLowerCase())||"ucs-2"===encoding||"utf16le"===encoding||"utf-16le"===encoding)){if(arr.length<2||val.length<2)return -1;indexSize=2,arrLength/=2,valLength/=2,byteOffset/=2}function read(buf,i){return 1===indexSize?buf[i]:buf.readUInt16BE(i*indexSize)}if(dir){let foundIndex=-1;for(i=byteOffset;i<arrLength;i++)if(read(arr,i)===read(val,-1===foundIndex?0:i-foundIndex)){if(-1===foundIndex&&(foundIndex=i),i-foundIndex+1===valLength)return foundIndex*indexSize}else -1!==foundIndex&&(i-=i-foundIndex),foundIndex=-1}else for(byteOffset+valLength>arrLength&&(byteOffset=arrLength-valLength),i=byteOffset;i>=0;i--){let found=!0;for(let j=0;j<valLength;j++)if(read(arr,i+j)!==read(val,j)){found=!1;break}if(found)return i}return -1}function utf8Slice(buf,start,end){end=Math.min(buf.length,end);let res=[],i=start;for(;i<end;){let firstByte=buf[i],codePoint=null,bytesPerSequence=firstByte>239?4:firstByte>223?3:firstByte>191?2:1;if(i+bytesPerSequence<=end){let secondByte,thirdByte,fourthByte,tempCodePoint;switch(bytesPerSequence){case 1:firstByte<128&&(codePoint=firstByte);break;case 2:(192&(secondByte=buf[i+1]))==128&&(tempCodePoint=(31&firstByte)<<6|63&secondByte)>127&&(codePoint=tempCodePoint);break;case 3:secondByte=buf[i+1],thirdByte=buf[i+2],(192&secondByte)==128&&(192&thirdByte)==128&&(tempCodePoint=(15&firstByte)<<12|(63&secondByte)<<6|63&thirdByte)>2047&&(tempCodePoint<55296||tempCodePoint>57343)&&(codePoint=tempCodePoint);break;case 4:secondByte=buf[i+1],thirdByte=buf[i+2],fourthByte=buf[i+3],(192&secondByte)==128&&(192&thirdByte)==128&&(192&fourthByte)==128&&(tempCodePoint=(15&firstByte)<<18|(63&secondByte)<<12|(63&thirdByte)<<6|63&fourthByte)>65535&&tempCodePoint<1114112&&(codePoint=tempCodePoint)}}null===codePoint?(codePoint=65533,bytesPerSequence=1):codePoint>65535&&(codePoint-=65536,res.push(codePoint>>>10&1023|55296),codePoint=56320|1023&codePoint),res.push(codePoint),i+=bytesPerSequence}return function(codePoints){let len=codePoints.length;if(len<=4096)return String.fromCharCode.apply(String,codePoints);let res="",i=0;for(;i<len;)res+=String.fromCharCode.apply(String,codePoints.slice(i,i+=4096));return res}(res)}function checkOffset(offset,ext,length){if(offset%1!=0||offset<0)throw RangeError("offset is not uint");if(offset+ext>length)throw RangeError("Trying to access beyond buffer length")}function checkInt(buf,value,offset,ext,max,min){if(!Buffer.isBuffer(buf))throw TypeError('"buffer" argument must be a Buffer instance');if(value>max||value<min)throw RangeError('"value" argument is out of bounds');if(offset+ext>buf.length)throw RangeError("Index out of range")}function wrtBigUInt64LE(buf,value,offset,min,max){checkIntBI(value,min,max,buf,offset,7);let lo=Number(value&BigInt(4294967295));buf[offset++]=lo,lo>>=8,buf[offset++]=lo,lo>>=8,buf[offset++]=lo,lo>>=8,buf[offset++]=lo;let hi=Number(value>>BigInt(32)&BigInt(4294967295));return buf[offset++]=hi,hi>>=8,buf[offset++]=hi,hi>>=8,buf[offset++]=hi,hi>>=8,buf[offset++]=hi,offset}function wrtBigUInt64BE(buf,value,offset,min,max){checkIntBI(value,min,max,buf,offset,7);let lo=Number(value&BigInt(4294967295));buf[offset+7]=lo,lo>>=8,buf[offset+6]=lo,lo>>=8,buf[offset+5]=lo,lo>>=8,buf[offset+4]=lo;let hi=Number(value>>BigInt(32)&BigInt(4294967295));return buf[offset+3]=hi,hi>>=8,buf[offset+2]=hi,hi>>=8,buf[offset+1]=hi,hi>>=8,buf[offset]=hi,offset+8}function checkIEEE754(buf,value,offset,ext,max,min){if(offset+ext>buf.length||offset<0)throw RangeError("Index out of range")}function writeFloat(buf,value,offset,littleEndian,noAssert){return value=+value,offset>>>=0,noAssert||checkIEEE754(buf,value,offset,4,34028234663852886e22,-34028234663852886e22),ieee754.write(buf,value,offset,littleEndian,23,4),offset+4}function writeDouble(buf,value,offset,littleEndian,noAssert){return value=+value,offset>>>=0,noAssert||checkIEEE754(buf,value,offset,8,17976931348623157e292,-17976931348623157e292),ieee754.write(buf,value,offset,littleEndian,52,8),offset+8}exports.Buffer=Buffer,exports.SlowBuffer=function(length){return+length!=length&&(length=0),Buffer.alloc(+length)},exports.INSPECT_MAX_BYTES=50,exports.kMaxLength=2147483647,Buffer.TYPED_ARRAY_SUPPORT=function(){try{let arr=new Uint8Array(1),proto={foo:function(){return 42}};return Object.setPrototypeOf(proto,Uint8Array.prototype),Object.setPrototypeOf(arr,proto),42===arr.foo()}catch(e){return!1}}(),Buffer.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(Buffer.prototype,"parent",{enumerable:!0,get:function(){if(Buffer.isBuffer(this))return this.buffer}}),Object.defineProperty(Buffer.prototype,"offset",{enumerable:!0,get:function(){if(Buffer.isBuffer(this))return this.byteOffset}}),Buffer.poolSize=8192,Buffer.from=function(value,encodingOrOffset,length){return from(value,encodingOrOffset,length)},Object.setPrototypeOf(Buffer.prototype,Uint8Array.prototype),Object.setPrototypeOf(Buffer,Uint8Array),Buffer.alloc=function(size,fill,encoding){return(assertSize(size),size<=0)?createBuffer(size):void 0!==fill?"string"==typeof encoding?createBuffer(size).fill(fill,encoding):createBuffer(size).fill(fill):createBuffer(size)},Buffer.allocUnsafe=function(size){return allocUnsafe(size)},Buffer.allocUnsafeSlow=function(size){return allocUnsafe(size)},Buffer.isBuffer=function(b){return null!=b&&!0===b._isBuffer&&b!==Buffer.prototype},Buffer.compare=function(a,b){if(isInstance(a,Uint8Array)&&(a=Buffer.from(a,a.offset,a.byteLength)),isInstance(b,Uint8Array)&&(b=Buffer.from(b,b.offset,b.byteLength)),!Buffer.isBuffer(a)||!Buffer.isBuffer(b))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(a===b)return 0;let x=a.length,y=b.length;for(let i=0,len=Math.min(x,y);i<len;++i)if(a[i]!==b[i]){x=a[i],y=b[i];break}return x<y?-1:y<x?1:0},Buffer.isEncoding=function(encoding){switch(String(encoding).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},Buffer.concat=function(list,length){let i;if(!Array.isArray(list))throw TypeError('"list" argument must be an Array of Buffers');if(0===list.length)return Buffer.alloc(0);if(void 0===length)for(i=0,length=0;i<list.length;++i)length+=list[i].length;let buffer=Buffer.allocUnsafe(length),pos=0;for(i=0;i<list.length;++i){let buf=list[i];if(isInstance(buf,Uint8Array))pos+buf.length>buffer.length?(Buffer.isBuffer(buf)||(buf=Buffer.from(buf)),buf.copy(buffer,pos)):Uint8Array.prototype.set.call(buffer,buf,pos);else if(Buffer.isBuffer(buf))buf.copy(buffer,pos);else throw TypeError('"list" argument must be an Array of Buffers');pos+=buf.length}return buffer},Buffer.byteLength=byteLength,Buffer.prototype._isBuffer=!0,Buffer.prototype.swap16=function(){let len=this.length;if(len%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(let i=0;i<len;i+=2)swap(this,i,i+1);return this},Buffer.prototype.swap32=function(){let len=this.length;if(len%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(let i=0;i<len;i+=4)swap(this,i,i+3),swap(this,i+1,i+2);return this},Buffer.prototype.swap64=function(){let len=this.length;if(len%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(let i=0;i<len;i+=8)swap(this,i,i+7),swap(this,i+1,i+6),swap(this,i+2,i+5),swap(this,i+3,i+4);return this},Buffer.prototype.toString=function(){let length=this.length;return 0===length?"":0==arguments.length?utf8Slice(this,0,length):slowToString.apply(this,arguments)},Buffer.prototype.toLocaleString=Buffer.prototype.toString,Buffer.prototype.equals=function(b){if(!Buffer.isBuffer(b))throw TypeError("Argument must be a Buffer");return this===b||0===Buffer.compare(this,b)},Buffer.prototype.inspect=function(){let str="",max=exports.INSPECT_MAX_BYTES;return str=this.toString("hex",0,max).replace(/(.{2})/g,"$1 ").trim(),this.length>max&&(str+=" ... "),"<Buffer "+str+">"},customInspectSymbol&&(Buffer.prototype[customInspectSymbol]=Buffer.prototype.inspect),Buffer.prototype.compare=function(target,start,end,thisStart,thisEnd){if(isInstance(target,Uint8Array)&&(target=Buffer.from(target,target.offset,target.byteLength)),!Buffer.isBuffer(target))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof target);if(void 0===start&&(start=0),void 0===end&&(end=target?target.length:0),void 0===thisStart&&(thisStart=0),void 0===thisEnd&&(thisEnd=this.length),start<0||end>target.length||thisStart<0||thisEnd>this.length)throw RangeError("out of range index");if(thisStart>=thisEnd&&start>=end)return 0;if(thisStart>=thisEnd)return -1;if(start>=end)return 1;if(start>>>=0,end>>>=0,thisStart>>>=0,thisEnd>>>=0,this===target)return 0;let x=thisEnd-thisStart,y=end-start,len=Math.min(x,y),thisCopy=this.slice(thisStart,thisEnd),targetCopy=target.slice(start,end);for(let i=0;i<len;++i)if(thisCopy[i]!==targetCopy[i]){x=thisCopy[i],y=targetCopy[i];break}return x<y?-1:y<x?1:0},Buffer.prototype.includes=function(val,byteOffset,encoding){return -1!==this.indexOf(val,byteOffset,encoding)},Buffer.prototype.indexOf=function(val,byteOffset,encoding){return bidirectionalIndexOf(this,val,byteOffset,encoding,!0)},Buffer.prototype.lastIndexOf=function(val,byteOffset,encoding){return bidirectionalIndexOf(this,val,byteOffset,encoding,!1)},Buffer.prototype.write=function(string,offset,length,encoding){var offset1,length1,offset2,length2,offset3,length3,offset4,length4;if(void 0===offset)encoding="utf8",length=this.length,offset=0;else if(void 0===length&&"string"==typeof offset)encoding=offset,length=this.length,offset=0;else if(isFinite(offset))offset>>>=0,isFinite(length)?(length>>>=0,void 0===encoding&&(encoding="utf8")):(encoding=length,length=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let remaining=this.length-offset;if((void 0===length||length>remaining)&&(length=remaining),string.length>0&&(length<0||offset<0)||offset>this.length)throw RangeError("Attempt to write outside buffer bounds");encoding||(encoding="utf8");let loweredCase=!1;for(;;)switch(encoding){case"hex":return function(buf,string,offset,length){let i;offset=Number(offset)||0;let remaining=buf.length-offset;length?(length=Number(length))>remaining&&(length=remaining):length=remaining;let strLen=string.length;for(length>strLen/2&&(length=strLen/2),i=0;i<length;++i){let parsed=parseInt(string.substr(2*i,2),16);if(parsed!=parsed)break;buf[offset+i]=parsed}return i}(this,string,offset,length);case"utf8":case"utf-8":return offset1=offset,length1=length,blitBuffer(utf8ToBytes(string,this.length-offset1),this,offset1,length1);case"ascii":case"latin1":case"binary":return offset2=offset,length2=length,blitBuffer(function(str){let byteArray=[];for(let i=0;i<str.length;++i)byteArray.push(255&str.charCodeAt(i));return byteArray}(string),this,offset2,length2);case"base64":return offset3=offset,length3=length,blitBuffer(base64ToBytes(string),this,offset3,length3);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return offset4=offset,length4=length,blitBuffer(function(str,units){let c,hi;let byteArray=[];for(let i=0;i<str.length&&!((units-=2)<0);++i)hi=(c=str.charCodeAt(i))>>8,byteArray.push(c%256),byteArray.push(hi);return byteArray}(string,this.length-offset4),this,offset4,length4);default:if(loweredCase)throw TypeError("Unknown encoding: "+encoding);encoding=(""+encoding).toLowerCase(),loweredCase=!0}},Buffer.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},Buffer.prototype.slice=function(start,end){let len=this.length;start=~~start,end=void 0===end?len:~~end,start<0?(start+=len)<0&&(start=0):start>len&&(start=len),end<0?(end+=len)<0&&(end=0):end>len&&(end=len),end<start&&(end=start);let newBuf=this.subarray(start,end);return Object.setPrototypeOf(newBuf,Buffer.prototype),newBuf},Buffer.prototype.readUintLE=Buffer.prototype.readUIntLE=function(offset,byteLength,noAssert){offset>>>=0,byteLength>>>=0,noAssert||checkOffset(offset,byteLength,this.length);let val=this[offset],mul=1,i=0;for(;++i<byteLength&&(mul*=256);)val+=this[offset+i]*mul;return val},Buffer.prototype.readUintBE=Buffer.prototype.readUIntBE=function(offset,byteLength,noAssert){offset>>>=0,byteLength>>>=0,noAssert||checkOffset(offset,byteLength,this.length);let val=this[offset+--byteLength],mul=1;for(;byteLength>0&&(mul*=256);)val+=this[offset+--byteLength]*mul;return val},Buffer.prototype.readUint8=Buffer.prototype.readUInt8=function(offset,noAssert){return offset>>>=0,noAssert||checkOffset(offset,1,this.length),this[offset]},Buffer.prototype.readUint16LE=Buffer.prototype.readUInt16LE=function(offset,noAssert){return offset>>>=0,noAssert||checkOffset(offset,2,this.length),this[offset]|this[offset+1]<<8},Buffer.prototype.readUint16BE=Buffer.prototype.readUInt16BE=function(offset,noAssert){return offset>>>=0,noAssert||checkOffset(offset,2,this.length),this[offset]<<8|this[offset+1]},Buffer.prototype.readUint32LE=Buffer.prototype.readUInt32LE=function(offset,noAssert){return offset>>>=0,noAssert||checkOffset(offset,4,this.length),(this[offset]|this[offset+1]<<8|this[offset+2]<<16)+16777216*this[offset+3]},Buffer.prototype.readUint32BE=Buffer.prototype.readUInt32BE=function(offset,noAssert){return offset>>>=0,noAssert||checkOffset(offset,4,this.length),16777216*this[offset]+(this[offset+1]<<16|this[offset+2]<<8|this[offset+3])},Buffer.prototype.readBigUInt64LE=defineBigIntMethod(function(offset){validateNumber(offset>>>=0,"offset");let first=this[offset],last=this[offset+7];(void 0===first||void 0===last)&&boundsError(offset,this.length-8);let lo=first+256*this[++offset]+65536*this[++offset]+16777216*this[++offset],hi=this[++offset]+256*this[++offset]+65536*this[++offset]+16777216*last;return BigInt(lo)+(BigInt(hi)<<BigInt(32))}),Buffer.prototype.readBigUInt64BE=defineBigIntMethod(function(offset){validateNumber(offset>>>=0,"offset");let first=this[offset],last=this[offset+7];(void 0===first||void 0===last)&&boundsError(offset,this.length-8);let hi=16777216*first+65536*this[++offset]+256*this[++offset]+this[++offset],lo=16777216*this[++offset]+65536*this[++offset]+256*this[++offset]+last;return(BigInt(hi)<<BigInt(32))+BigInt(lo)}),Buffer.prototype.readIntLE=function(offset,byteLength,noAssert){offset>>>=0,byteLength>>>=0,noAssert||checkOffset(offset,byteLength,this.length);let val=this[offset],mul=1,i=0;for(;++i<byteLength&&(mul*=256);)val+=this[offset+i]*mul;return val>=(mul*=128)&&(val-=Math.pow(2,8*byteLength)),val},Buffer.prototype.readIntBE=function(offset,byteLength,noAssert){offset>>>=0,byteLength>>>=0,noAssert||checkOffset(offset,byteLength,this.length);let i=byteLength,mul=1,val=this[offset+--i];for(;i>0&&(mul*=256);)val+=this[offset+--i]*mul;return val>=(mul*=128)&&(val-=Math.pow(2,8*byteLength)),val},Buffer.prototype.readInt8=function(offset,noAssert){return(offset>>>=0,noAssert||checkOffset(offset,1,this.length),128&this[offset])?-((255-this[offset]+1)*1):this[offset]},Buffer.prototype.readInt16LE=function(offset,noAssert){offset>>>=0,noAssert||checkOffset(offset,2,this.length);let val=this[offset]|this[offset+1]<<8;return 32768&val?4294901760|val:val},Buffer.prototype.readInt16BE=function(offset,noAssert){offset>>>=0,noAssert||checkOffset(offset,2,this.length);let val=this[offset+1]|this[offset]<<8;return 32768&val?4294901760|val:val},Buffer.prototype.readInt32LE=function(offset,noAssert){return offset>>>=0,noAssert||checkOffset(offset,4,this.length),this[offset]|this[offset+1]<<8|this[offset+2]<<16|this[offset+3]<<24},Buffer.prototype.readInt32BE=function(offset,noAssert){return offset>>>=0,noAssert||checkOffset(offset,4,this.length),this[offset]<<24|this[offset+1]<<16|this[offset+2]<<8|this[offset+3]},Buffer.prototype.readBigInt64LE=defineBigIntMethod(function(offset){validateNumber(offset>>>=0,"offset");let first=this[offset],last=this[offset+7];(void 0===first||void 0===last)&&boundsError(offset,this.length-8);let val=this[offset+4]+256*this[offset+5]+65536*this[offset+6]+(last<<24);return(BigInt(val)<<BigInt(32))+BigInt(first+256*this[++offset]+65536*this[++offset]+16777216*this[++offset])}),Buffer.prototype.readBigInt64BE=defineBigIntMethod(function(offset){validateNumber(offset>>>=0,"offset");let first=this[offset],last=this[offset+7];(void 0===first||void 0===last)&&boundsError(offset,this.length-8);let val=(first<<24)+65536*this[++offset]+256*this[++offset]+this[++offset];return(BigInt(val)<<BigInt(32))+BigInt(16777216*this[++offset]+65536*this[++offset]+256*this[++offset]+last)}),Buffer.prototype.readFloatLE=function(offset,noAssert){return offset>>>=0,noAssert||checkOffset(offset,4,this.length),ieee754.read(this,offset,!0,23,4)},Buffer.prototype.readFloatBE=function(offset,noAssert){return offset>>>=0,noAssert||checkOffset(offset,4,this.length),ieee754.read(this,offset,!1,23,4)},Buffer.prototype.readDoubleLE=function(offset,noAssert){return offset>>>=0,noAssert||checkOffset(offset,8,this.length),ieee754.read(this,offset,!0,52,8)},Buffer.prototype.readDoubleBE=function(offset,noAssert){return offset>>>=0,noAssert||checkOffset(offset,8,this.length),ieee754.read(this,offset,!1,52,8)},Buffer.prototype.writeUintLE=Buffer.prototype.writeUIntLE=function(value,offset,byteLength,noAssert){if(value=+value,offset>>>=0,byteLength>>>=0,!noAssert){let maxBytes=Math.pow(2,8*byteLength)-1;checkInt(this,value,offset,byteLength,maxBytes,0)}let mul=1,i=0;for(this[offset]=255&value;++i<byteLength&&(mul*=256);)this[offset+i]=value/mul&255;return offset+byteLength},Buffer.prototype.writeUintBE=Buffer.prototype.writeUIntBE=function(value,offset,byteLength,noAssert){if(value=+value,offset>>>=0,byteLength>>>=0,!noAssert){let maxBytes=Math.pow(2,8*byteLength)-1;checkInt(this,value,offset,byteLength,maxBytes,0)}let i=byteLength-1,mul=1;for(this[offset+i]=255&value;--i>=0&&(mul*=256);)this[offset+i]=value/mul&255;return offset+byteLength},Buffer.prototype.writeUint8=Buffer.prototype.writeUInt8=function(value,offset,noAssert){return value=+value,offset>>>=0,noAssert||checkInt(this,value,offset,1,255,0),this[offset]=255&value,offset+1},Buffer.prototype.writeUint16LE=Buffer.prototype.writeUInt16LE=function(value,offset,noAssert){return value=+value,offset>>>=0,noAssert||checkInt(this,value,offset,2,65535,0),this[offset]=255&value,this[offset+1]=value>>>8,offset+2},Buffer.prototype.writeUint16BE=Buffer.prototype.writeUInt16BE=function(value,offset,noAssert){return value=+value,offset>>>=0,noAssert||checkInt(this,value,offset,2,65535,0),this[offset]=value>>>8,this[offset+1]=255&value,offset+2},Buffer.prototype.writeUint32LE=Buffer.prototype.writeUInt32LE=function(value,offset,noAssert){return value=+value,offset>>>=0,noAssert||checkInt(this,value,offset,4,4294967295,0),this[offset+3]=value>>>24,this[offset+2]=value>>>16,this[offset+1]=value>>>8,this[offset]=255&value,offset+4},Buffer.prototype.writeUint32BE=Buffer.prototype.writeUInt32BE=function(value,offset,noAssert){return value=+value,offset>>>=0,noAssert||checkInt(this,value,offset,4,4294967295,0),this[offset]=value>>>24,this[offset+1]=value>>>16,this[offset+2]=value>>>8,this[offset+3]=255&value,offset+4},Buffer.prototype.writeBigUInt64LE=defineBigIntMethod(function(value,offset=0){return wrtBigUInt64LE(this,value,offset,BigInt(0),BigInt("0xffffffffffffffff"))}),Buffer.prototype.writeBigUInt64BE=defineBigIntMethod(function(value,offset=0){return wrtBigUInt64BE(this,value,offset,BigInt(0),BigInt("0xffffffffffffffff"))}),Buffer.prototype.writeIntLE=function(value,offset,byteLength,noAssert){if(value=+value,offset>>>=0,!noAssert){let limit=Math.pow(2,8*byteLength-1);checkInt(this,value,offset,byteLength,limit-1,-limit)}let i=0,mul=1,sub=0;for(this[offset]=255&value;++i<byteLength&&(mul*=256);)value<0&&0===sub&&0!==this[offset+i-1]&&(sub=1),this[offset+i]=(value/mul>>0)-sub&255;return offset+byteLength},Buffer.prototype.writeIntBE=function(value,offset,byteLength,noAssert){if(value=+value,offset>>>=0,!noAssert){let limit=Math.pow(2,8*byteLength-1);checkInt(this,value,offset,byteLength,limit-1,-limit)}let i=byteLength-1,mul=1,sub=0;for(this[offset+i]=255&value;--i>=0&&(mul*=256);)value<0&&0===sub&&0!==this[offset+i+1]&&(sub=1),this[offset+i]=(value/mul>>0)-sub&255;return offset+byteLength},Buffer.prototype.writeInt8=function(value,offset,noAssert){return value=+value,offset>>>=0,noAssert||checkInt(this,value,offset,1,127,-128),value<0&&(value=255+value+1),this[offset]=255&value,offset+1},Buffer.prototype.writeInt16LE=function(value,offset,noAssert){return value=+value,offset>>>=0,noAssert||checkInt(this,value,offset,2,32767,-32768),this[offset]=255&value,this[offset+1]=value>>>8,offset+2},Buffer.prototype.writeInt16BE=function(value,offset,noAssert){return value=+value,offset>>>=0,noAssert||checkInt(this,value,offset,2,32767,-32768),this[offset]=value>>>8,this[offset+1]=255&value,offset+2},Buffer.prototype.writeInt32LE=function(value,offset,noAssert){return value=+value,offset>>>=0,noAssert||checkInt(this,value,offset,4,2147483647,-2147483648),this[offset]=255&value,this[offset+1]=value>>>8,this[offset+2]=value>>>16,this[offset+3]=value>>>24,offset+4},Buffer.prototype.writeInt32BE=function(value,offset,noAssert){return value=+value,offset>>>=0,noAssert||checkInt(this,value,offset,4,2147483647,-2147483648),value<0&&(value=4294967295+value+1),this[offset]=value>>>24,this[offset+1]=value>>>16,this[offset+2]=value>>>8,this[offset+3]=255&value,offset+4},Buffer.prototype.writeBigInt64LE=defineBigIntMethod(function(value,offset=0){return wrtBigUInt64LE(this,value,offset,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),Buffer.prototype.writeBigInt64BE=defineBigIntMethod(function(value,offset=0){return wrtBigUInt64BE(this,value,offset,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),Buffer.prototype.writeFloatLE=function(value,offset,noAssert){return writeFloat(this,value,offset,!0,noAssert)},Buffer.prototype.writeFloatBE=function(value,offset,noAssert){return writeFloat(this,value,offset,!1,noAssert)},Buffer.prototype.writeDoubleLE=function(value,offset,noAssert){return writeDouble(this,value,offset,!0,noAssert)},Buffer.prototype.writeDoubleBE=function(value,offset,noAssert){return writeDouble(this,value,offset,!1,noAssert)},Buffer.prototype.copy=function(target,targetStart,start,end){if(!Buffer.isBuffer(target))throw TypeError("argument should be a Buffer");if(start||(start=0),end||0===end||(end=this.length),targetStart>=target.length&&(targetStart=target.length),targetStart||(targetStart=0),end>0&&end<start&&(end=start),end===start||0===target.length||0===this.length)return 0;if(targetStart<0)throw RangeError("targetStart out of bounds");if(start<0||start>=this.length)throw RangeError("Index out of range");if(end<0)throw RangeError("sourceEnd out of bounds");end>this.length&&(end=this.length),target.length-targetStart<end-start&&(end=target.length-targetStart+start);let len=end-start;return this===target&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(targetStart,start,end):Uint8Array.prototype.set.call(target,this.subarray(start,end),targetStart),len},Buffer.prototype.fill=function(val,start,end,encoding){let i;if("string"==typeof val){if("string"==typeof start?(encoding=start,start=0,end=this.length):"string"==typeof end&&(encoding=end,end=this.length),void 0!==encoding&&"string"!=typeof encoding)throw TypeError("encoding must be a string");if("string"==typeof encoding&&!Buffer.isEncoding(encoding))throw TypeError("Unknown encoding: "+encoding);if(1===val.length){let code=val.charCodeAt(0);("utf8"===encoding&&code<128||"latin1"===encoding)&&(val=code)}}else"number"==typeof val?val&=255:"boolean"==typeof val&&(val=Number(val));if(start<0||this.length<start||this.length<end)throw RangeError("Out of range index");if(end<=start)return this;if(start>>>=0,end=void 0===end?this.length:end>>>0,val||(val=0),"number"==typeof val)for(i=start;i<end;++i)this[i]=val;else{let bytes=Buffer.isBuffer(val)?val:Buffer.from(val,encoding),len=bytes.length;if(0===len)throw TypeError('The value "'+val+'" is invalid for argument "value"');for(i=0;i<end-start;++i)this[i+start]=bytes[i%len]}return this};let errors={};function E(sym,getMessage,Base){errors[sym]=class extends Base{constructor(){super(),Object.defineProperty(this,"message",{value:getMessage.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${sym}]`,this.stack,delete this.name}get code(){return sym}set code(value){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value,writable:!0})}toString(){return`${this.name} [${sym}]: ${this.message}`}}}function addNumericalSeparator(val){let res="",i=val.length,start="-"===val[0]?1:0;for(;i>=start+4;i-=3)res=`_${val.slice(i-3,i)}${res}`;return`${val.slice(0,i)}${res}`}function checkIntBI(value,min,max,buf,offset,byteLength){if(value>max||value<min){let range;let n="bigint"==typeof min?"n":"";throw range=byteLength>3?0===min||min===BigInt(0)?`>= 0${n} and < 2${n} ** ${(byteLength+1)*8}${n}`:`>= -(2${n} ** ${(byteLength+1)*8-1}${n}) and < 2 ** ${(byteLength+1)*8-1}${n}`:`>= ${min}${n} and <= ${max}${n}`,new errors.ERR_OUT_OF_RANGE("value",range,value)}validateNumber(offset,"offset"),(void 0===buf[offset]||void 0===buf[offset+byteLength])&&boundsError(offset,buf.length-(byteLength+1))}function validateNumber(value,name){if("number"!=typeof value)throw new errors.ERR_INVALID_ARG_TYPE(name,"number",value)}function boundsError(value,length,type){if(Math.floor(value)!==value)throw validateNumber(value,type),new errors.ERR_OUT_OF_RANGE(type||"offset","an integer",value);if(length<0)throw new errors.ERR_BUFFER_OUT_OF_BOUNDS;throw new errors.ERR_OUT_OF_RANGE(type||"offset",`>= ${type?1:0} and <= ${length}`,value)}E("ERR_BUFFER_OUT_OF_BOUNDS",function(name){return name?`${name} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),E("ERR_INVALID_ARG_TYPE",function(name,actual){return`The "${name}" argument must be of type number. Received type ${typeof actual}`},TypeError),E("ERR_OUT_OF_RANGE",function(str,range,input){let msg=`The value of "${str}" is out of range.`,received=input;return Number.isInteger(input)&&Math.abs(input)>4294967296?received=addNumericalSeparator(String(input)):"bigint"==typeof input&&(received=String(input),(input>BigInt(2)**BigInt(32)||input<-(BigInt(2)**BigInt(32)))&&(received=addNumericalSeparator(received)),received+="n"),msg+=` It must be ${range}. Received ${received}`},RangeError);let INVALID_BASE64_RE=/[^+/0-9A-Za-z-_]/g;function utf8ToBytes(string,units){let codePoint;units=units||1/0;let length=string.length,leadSurrogate=null,bytes=[];for(let i=0;i<length;++i){if((codePoint=string.charCodeAt(i))>55295&&codePoint<57344){if(!leadSurrogate){if(codePoint>56319||i+1===length){(units-=3)>-1&&bytes.push(239,191,189);continue}leadSurrogate=codePoint;continue}if(codePoint<56320){(units-=3)>-1&&bytes.push(239,191,189),leadSurrogate=codePoint;continue}codePoint=(leadSurrogate-55296<<10|codePoint-56320)+65536}else leadSurrogate&&(units-=3)>-1&&bytes.push(239,191,189);if(leadSurrogate=null,codePoint<128){if((units-=1)<0)break;bytes.push(codePoint)}else if(codePoint<2048){if((units-=2)<0)break;bytes.push(codePoint>>6|192,63&codePoint|128)}else if(codePoint<65536){if((units-=3)<0)break;bytes.push(codePoint>>12|224,codePoint>>6&63|128,63&codePoint|128)}else if(codePoint<1114112){if((units-=4)<0)break;bytes.push(codePoint>>18|240,codePoint>>12&63|128,codePoint>>6&63|128,63&codePoint|128)}else throw Error("Invalid code point")}return bytes}function base64ToBytes(str){return base64.toByteArray(function(str){if((str=(str=str.split("=")[0]).trim().replace(INVALID_BASE64_RE,"")).length<2)return"";for(;str.length%4!=0;)str+="=";return str}(str))}function blitBuffer(src,dst,offset,length){let i;for(i=0;i<length&&!(i+offset>=dst.length)&&!(i>=src.length);++i)dst[i+offset]=src[i];return i}function isInstance(obj,type){return obj instanceof type||null!=obj&&null!=obj.constructor&&null!=obj.constructor.name&&obj.constructor.name===type.name}let hexSliceLookupTable=function(){let alphabet="0123456789abcdef",table=Array(256);for(let i=0;i<16;++i){let i16=16*i;for(let j=0;j<16;++j)table[i16+j]=alphabet[i]+alphabet[j]}return table}();function defineBigIntMethod(fn){return"undefined"==typeof BigInt?BufferBigIntNotDefined:fn}function BufferBigIntNotDefined(){throw Error("BigInt not supported")}},80645:function(__unused_webpack_module,exports){/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ exports.read=function(buffer,offset,isLE,mLen,nBytes){var e,m,eLen=8*nBytes-mLen-1,eMax=(1<<eLen)-1,eBias=eMax>>1,nBits=-7,i=isLE?nBytes-1:0,d=isLE?-1:1,s=buffer[offset+i];for(i+=d,e=s&(1<<-nBits)-1,s>>=-nBits,nBits+=eLen;nBits>0;e=256*e+buffer[offset+i],i+=d,nBits-=8);for(m=e&(1<<-nBits)-1,e>>=-nBits,nBits+=mLen;nBits>0;m=256*m+buffer[offset+i],i+=d,nBits-=8);if(0===e)e=1-eBias;else{if(e===eMax)return m?NaN:(s?-1:1)*(1/0);m+=Math.pow(2,mLen),e-=eBias}return(s?-1:1)*m*Math.pow(2,e-mLen)},exports.write=function(buffer,value,offset,isLE,mLen,nBytes){var e,m,c,eLen=8*nBytes-mLen-1,eMax=(1<<eLen)-1,eBias=eMax>>1,rt=23===mLen?5960464477539062e-23:0,i=isLE?0:nBytes-1,d=isLE?1:-1,s=value<0||0===value&&1/value<0?1:0;for(isNaN(value=Math.abs(value))||value===1/0?(m=isNaN(value)?1:0,e=eMax):(e=Math.floor(Math.log(value)/Math.LN2),value*(c=Math.pow(2,-e))<1&&(e--,c*=2),e+eBias>=1?value+=rt/c:value+=rt*Math.pow(2,1-eBias),value*c>=2&&(e++,c/=2),e+eBias>=eMax?(m=0,e=eMax):e+eBias>=1?(m=(value*c-1)*Math.pow(2,mLen),e+=eBias):(m=value*Math.pow(2,eBias-1)*Math.pow(2,mLen),e=0));mLen>=8;buffer[offset+i]=255&m,i+=d,m/=256,mLen-=8);for(e=e<<mLen|m,eLen+=mLen;eLen>0;buffer[offset+i]=255&e,i+=d,e/=256,eLen-=8);buffer[offset+i-d]|=128*s}}}]);